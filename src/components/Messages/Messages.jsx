import React, { useState } from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import Inbox from './Inbox';
import OutBox from './OutBox';
import NewMessage from './NewMessage';
function Messages(props) {
    const [currentTab, setCurrentTab] = useState(1);

    const messagesTabs = [
        {
            text: 'Входящие сообщения',
            id: 1,
        },
        {
            text: 'Исходящие сообщения ',
            id: 2,
        },
        {
            text: 'Написать сообщение ',
            id: 3,
        },
    ];

    return (
        <div>
            <div className="messageTabs">
                {messagesTabs.map((btn) => {
                    return (
                        <ButtonRegistry
                            text={btn.text}
                            key={btn.id}
                            style={
                                btn.id === currentTab
                                    ? { background: '#97c4f2' }
                                    : {}
                            }
                            className={'button-registry'}
                            onClick={() => {
                                setCurrentTab(btn.id);
                            }}
                        />
                    );
                })}
            </div>

            <div className="messagesContent">
                {currentTab === 1 && <Inbox />}
                {currentTab === 2 && <OutBox />}
                {currentTab === 3 && <NewMessage />}
            </div>
        </div>
    );
}

export default Messages;
