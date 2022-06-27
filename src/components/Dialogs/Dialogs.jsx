// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './dialogs.scss';

// function Dialogs(props) {
//     const [messages, setMessages] = useState([]);
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         subscribe();
//     }, []);

//     //     const sendMessage = async () => {
//     //         await axios.post(url, {
//     //             message: value,
//     //             id: Date.now(),
//     //         });
//     //     };

//     const subscribe = async () => {
//         try {
//             //   const { data } = await axios.get(url);
//             //   setMessages((prev) => [data, ...prev]);
//             await subscribe();
//         } catch (e) {
//             console.log(e);
//             setTimeout(() => {
//                 subscribe();
//             }, 500);
//         }
//     };

//     return (
//         <div>
//             <div className="center">
//                 <form className="form">
//                     <input
//                         value={value}
//                         onChange={(e) => setValue(e.target.value)}
//                         type="text"
//                     />
//                     {/* <button onClick={sendMessage}>Отправить</button> */}
//                 </form>
//                 <div className="messages">
//                     {messages.map((message) => (
//                         <div className="message" key={message.id}>
//                             {message.message}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dialogs;
