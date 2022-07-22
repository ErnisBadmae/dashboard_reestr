import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LongPulling(props) {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        try {
            const { data } = await axios.post(
                '/api/user/message/incoming_list'
            );
            setMessages((prev) => [data, ...prev]);
            await subscribe();
        } catch (error) {
            setTimeout(() => {
                subscribe();
            }, 500);
        }
    };

    const sendMessage = async () => {
        await axios.post('/api/user/message/contacts_prof_sdc', {
            message: value,
            id: Date.now(),
        });
    };

    return (
        <div className="center">
            <div>
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
            </div>
        </div>
    );
}

export default LongPulling;
