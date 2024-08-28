import '@/css/formContactMe.scss'
import { useRef, useState } from 'react'
import Allert from './Allert';
import emailjs from '@emailjs/browser';

export default function FormContactMe() {
    const form = useRef(null);
    const [emailUser, setEmailUser] = useState('');
    const [messageUser, setMessageUser] = useState('');
    const [isValidMessage, setIsValidMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    function validateEmail(email: string) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const sendEmail = () => {
        if (form.current) {
            emailjs
                .sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY)
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    const sendMessage = () => {
        setErrorMessage('');

        if (!validateEmail(emailUser)) {
            setIsValidMessage(false);
            setErrorMessage('Email non valida');
            return;
        }

        if (!messageUser) {
            setIsValidMessage(false);
            setErrorMessage('Messaggio non esistente');
            return;
        }

        setIsValidMessage(true);

        sendEmail();
    };

    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 border-2 border-[--dark_primary] shadow-lg sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative bg-[--primary_dark] shadow-lg sm:rounded-3xl p-10">
                    <div>
                        <h1 className="text-2xl font-semibold text-white">Let's Work Together</h1>
                        <div className="py-8">
                            <form ref={form} className='flex flex-col gap-10'>
                                <div className="inputBox">
                                    <input
                                        onChange={(e) => setEmailUser(e.target.value)}
                                        className='w-full'
                                        type="email"
                                        name="user_email"
                                    />
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <textarea
                                        onChange={(e) => setMessageUser(e.target.value)}
                                        className='w-full'
                                        name="message"
                                    ></textarea>
                                    <span>Messaggio</span>
                                </div>
                            </form>
                            <div className='flex justify-center pt-5'>
                                <div onClick={sendMessage}>
                                    <Allert textButton='Scrivimi' textError={errorMessage} state={isValidMessage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
