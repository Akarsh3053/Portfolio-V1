"use client"

import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sent, setSent] = useState(false);
    const [failed, setFailed] = useState(false);

    const sentStatus = `px-4 py-2 ${sent ? 'mt-2 text-green-600 font-semibold animate-bounce' : 'hidden'}`;
    const failedStatus = `px-4 py-2 ${failed ? 'mt-2 text-red-600 font-semibold animate-bounce' : 'hidden'}`;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send(
            'service_g4a1kig',
            'template_6c1nees',
            {
                from_name: name,
                to_name: "Akarsh Bajpai",
                from_email: email,
                to_email: "onlyakarsh@gmail.com",
                message: message,
            },
            'Zqbt0KdyiJ6MSrYRy'
        )
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSent(true);
                    setTimeout(() => { setSent(false) }, 3000);
                },
                (error) => {
                    console.error(error);
                    setFailed(true);
                    setTimeout(() => { setFailed(false) }, 3000);
                }
            );
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="w-full mx-auto mt-8 p-6 bg-white/10 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Got ideas or questions? let's chat!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-7">
                    <label htmlFor="name" className="block text-gray-200 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border font-semibold text-black bg-slate-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        required
                    />
                </div>
                <div className="mb-7">
                    <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-black font-semibold bg-slate-200 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        required
                    />
                </div>
                <div className="mb-7">
                    <label htmlFor="message" className="block text-gray-200 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        placeholder='8318419334'
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full text-black font-semibold bg-slate-200 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 h-32 resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
                >
                    <span
                        className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0" />
                    <span className="relative flex text-slate-800 items-center justify-center gap-2">
                        Send Message
                    </span>
                </button>

                <p className={sentStatus}>Hey! thanks for reaching out, I'll get back to you soon✌🏻</p>
                <p className={failedStatus}>Oops! something went wrong, Please try again later😕</p>

            </form>
        </div>
    );
};

export default ContactForm;