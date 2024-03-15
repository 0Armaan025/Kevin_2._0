"use client";

import React, { useState } from 'react';
import './homescreen.css';

interface Message {
    sender: string;
    message: string;
}

const HomeScreen = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSend = (inputMessage: string) => {
        if (!inputMessage.trim()) return; // Ignore empty messages
        const newMessages: Message[] = [
            ...messages,
            { sender: 'you', message: inputMessage },
            { sender: 'Kevin', message: 'Doing!' }
        ];
        setMessages(newMessages);
        (document.getElementById('messageInput') as HTMLTextAreaElement).value = '';
    };

    return (
        <>
            <div className="homePage">
                <center>
                    <h2 style={{ fontFamily: "Ojuju" }} className='text-5xl text-white font-bold top-2 '>Hey there, Meet Kevin 2.0</h2>

                    <div className="grids">
                        <div className="row flex-row justify-center align-center">
                            <div className="promptGrid w-[48%] h-[40vh] absolute top-20 left-4 rounded-lg border-1 border-gray-800" style={{ background: "#171616" }}>
                                <h2 className='text-xl mt-4 mr-[65vh]' style={{ fontFamily: "Madimi One" }}>Input your prompt here</h2>
                                <div className="chatTextArea mt-2" style={{ maxHeight: "30vh", overflowY: "auto" }}>
                                    {messages.map((msg, index) => (
                                        <h2 className="text-[3vh]" key={index}>{msg.sender}: {msg.message}</h2>
                                    ))}
                                </div>
                                <div className="inputArea flex-row justify-center align-middle">
                                    <textarea id="messageInput" placeholder='Enter your prompt here for Kevin 2.0' className="w-[95vh] text-sm rounded-lg p-2 outline-none absolute bottom-[1vh] align-middle right-20 overflow-y-hidden max-h-12 " />
                                    <button className="rounded-full h-10 w-10 bg-black absolute bottom-2 right-5 align-middle" onClick={() => handleSend((document.getElementById('messageInput') as HTMLTextAreaElement).value)}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/561/561226.png" className='h-5 w-[5vh] align-middle ml-1' />
                                    </button>
                                </div>
                                <br />
                            </div>
                            <div className="toDoGrid w-[48%] h-[40vh] absolute right-5 top-20 rounded-lg border-1 border-gray-800" style={{ background: "#171616" }}>

                            </div>
                        </div>
                        <div className="row flex-row justify-center align-center">
                            <div className="compilerGrid w-[48%] h-[40vh] absolute bottom-5 left-4 rounded-lg border-1 border-gray-700" style={{ background: "#171616" }}>

                            </div>
                            <div className="browserGrid w-[48%] h-[40vh] absolute right-5 bottom-5 rounded-lg border-1 border-gray-700" style={{ background: "#171616" }}>

                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default HomeScreen;
