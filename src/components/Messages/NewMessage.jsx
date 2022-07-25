import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dialog.scss';
import { RichEditorExample } from './RichText';
import { EditorState } from 'draft-js';
// import { Editor } from '@tinymce/tinymce-react';
import TextEditor from './RichText';

function NewMessage(props) {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [messageText, setMessageText] = useState(() =>
        EditorState.createEmpty()
    );

    const [messageType, setMessageType] = useState('users');
    const [recieverList, setRecieverList] = useState([]);

    // useEffect(() => {
    //     subscribe();
    // }, []);

    const contacts = {
        usersSdc: [
            {
                user_type_data: {
                    user_type: 'user_sdc',
                    user_type_name: 'Пользователь СДС',
                },
                id: 1,
                email: 'user_sdc@mail.com',
                dttm_created: null,
                dttm_update: null,
                dttn_last_authorization: '2022-07-04T12:57:24+00:00',
                enabled: true,
            },
            {
                user_type_data: {
                    user_type: 'user_sdc',
                    user_type_name: 'Пользователь СДС',
                },
                id: 11,
                email: 'user_sdc1@mail.ru',
                dttm_created: null,
                dttm_update: null,
                dttn_last_authorization: '2022-06-30T08:39:29+00:00',
                enabled: true,
            },
        ],
        usersOc: [
            {
                user_type_data: {
                    user_type: 'user_oc',
                    user_type_name: 'Пользователь органа сертификации',
                },
                id: 23,
                email: 'user_oc2@mail.ru',
                dttm_created: '2022-06-16T09:30:43+00:00',
                dttm_update: null,
                dttn_last_authorization: '2022-06-16T09:38:37+00:00',
                enabled: true,
            },
            {
                user_type_data: {
                    user_type: 'user_oc',
                    user_type_name: 'Пользователь органа сертификации',
                },
                id: 21,
                email: 'user_oc1@mail.ru',
                dttm_created: '2022-06-03T15:57:13+00:00',
                dttm_update: null,
                dttn_last_authorization: '2022-07-08T15:33:28+00:00',
                enabled: true,
            },
            {
                user_type_data: {
                    user_type: 'user_oc',
                    user_type_name: 'Пользователь органа сертификации',
                },
                id: 22,
                email: 'user_oc@mail.ru',
                dttm_created: '2022-06-09T08:19:47+00:00',
                dttm_update: null,
                dttn_last_authorization: '2022-07-08T15:37:23+00:00',
                enabled: true,
            },
        ],
        groups: [
            {
                code: 'admin',
                name: 'Техническая поддержка',
            },
            {
                code: 'prof_sdc',
                name: 'Оператор ПРОФ СДС',
            },
        ],
    };

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
    };

    return (
        <div className="center">
            <div className="messagesContainer">
                <div className="messages">
                    <TextEditor />
                    {/* <div className="messagesBlock">{messageText}</div> */}

                    {/* <RichEditorExample
                        editorState={EditorState.createEmpty()}
                        onChange={(_, editorState) => {
                            // console.log(editorState);
                            setMessageText(editorState);
                        }}
                        onBlur={() => {
                            console.log('blur');
                        }}
                    /> */}

                    <input
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />

                    {/* <div className="richTextContainer">
                        <button
                            onClick={() => {
                                setMessageText(value);
                            }}
                        >
                            Send
                        </button>
                    </div> */}
                </div>

                <div className="contactList">
                    {Object.entries(contacts).map((contactList) => {
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

            {/* <div>
                <div className="form">
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                    />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className="messages">
                    {messages.map((mess) => (
                        <div className="message" key={mess.id}>
                            {mess.message}
                        </div>
                     ))}
                </div>
            </div> */}
        </div>
    );
}

export default NewMessage;
