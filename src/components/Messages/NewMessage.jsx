import React, { useState, useEffect } from 'react';
import './dialog.scss';
import { EditorState } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import TextEditor from './RichText';
import { sendMessage, getContactList } from '../../store/messages/actions';
import { error, info } from '../Toast/Toast';

function NewMessage(props) {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [messageText, setMessageText] = useState(
        EditorState.createEmpty().getCurrentContent()
    );

    const userRole = useSelector((state) => state.auth.user.roles);

    const [messageType, setMessageType] = useState('users');
    const [recieverList, setRecieverList] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContactList({ userRole }));
    }, [dispatch, userRole]);

    const { contactsList } = useSelector((state) => state.messages);

    // функция для фильтра массива получателей для удаления конкретного получателя (чтобы оставить в массиве всех кроме него)
    const compareRecievers = (el, reciever, isNegativeComparasion) => {
        if (reciever.id) {
            return isNegativeComparasion
                ? el.id !== reciever.id
                : el.id === reciever.id;
        } else {
            return isNegativeComparasion
                ? el.code !== reciever.code
                : el.code === reciever.code;
        }
    };

    const handleSelectRecievers = (el) => {
        // проверяем тип группы и очищаем массив получателей если группа сменилась
        if (el.email) {
            setMessageType('users');

            if (recieverList.length) {
                !recieverList[0].email && setRecieverList([]);
            }
        } else {
            setMessageType('group');
            if (recieverList.length) {
                !recieverList[0].code && setRecieverList([]);
            }
        }

        // проверяем есть ли такой же элемент в массиве получателей и если есть фильтруем массив по айди этого получателя, чтобы исключить его из этого массива

        if (messageType === 'group') {
            setRecieverList([el]);
        } else {
            if (
                recieverList.some((reciever) => {
                    return compareRecievers(el, reciever, false);
                })
            ) {
                setRecieverList((prev) =>
                    prev.filter((reciever) => {
                        return compareRecievers(el, reciever, true);
                    })
                );
            } else {
                setRecieverList((prev) => [...prev, el]);
            }
        }
    };

    const handleSendMessage = () => {
        if (recieverList.length > 0) {
            if (recieverList[0].code) {
                dispatch(
                    sendMessage({
                        group: recieverList[0].code,
                        messageText: messageText.getPlainText(),
                    })
                );
            }
            if (recieverList[0].email) {
                dispatch(
                    sendMessage({
                        users: recieverList.map((el) => el.id),
                        messageText: messageText.getPlainText(),
                    })
                );
            }
            info('Отправлено!');
        } else {
            error('Выберите хотя бы одного получателя!');
        }
    };
    return (
        <div className="center">
            <div className="messagesContainer">
                <div className="messages">
                    <TextEditor setMessageText={setMessageText} />

                    <button
                        onClick={handleSendMessage}
                        className={'btn__login'}
                    >
                        Отправить
                    </button>
                </div>

                <div className="contactList">
                    {Object.entries(contactsList).map((contactList) => {
                        return contactList.map((contact) => {
                            if (typeof contact === 'string') {
                                return <span>{contact}</span>;
                            } else {
                                return contact.map((el) => {
                                    return (
                                        <button
                                            onClick={() => {
                                                handleSelectRecievers(el);
                                            }}
                                            className={
                                                recieverList.some(
                                                    (reciever) => {
                                                        return compareRecievers(
                                                            el,
                                                            reciever,
                                                            false
                                                        );
                                                    }
                                                )
                                                    ? 'reciever selected'
                                                    : 'reciever'
                                            }
                                        >
                                            {el.email ? el.email : el.name}
                                        </button>
                                    );
                                });
                            }
                        });
                    })}
                </div>
            </div>
        </div>
    );
}

export default NewMessage;
