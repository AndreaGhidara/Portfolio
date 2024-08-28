import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/css/allert.scss';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface AllertProps {
    state: boolean
    textButton: string
    textError: string
}

export default function Allert({ state, textButton, textError }: AllertProps) {
    const [isActive, setIsActive] = useState(false);
    const [isProgressActive, setIsProgressActive] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)

    let timer1: string | number | NodeJS.Timeout | undefined, timer2: string | number | NodeJS.Timeout | undefined;

    useEffect(() => {
        setIsSuccess(state)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [state]);

    const showToast = () => {
        setIsActive(true);
        setIsProgressActive(true);

        timer1 = setTimeout(() => {
            setIsActive(false);
        }, 5000);

        timer2 = setTimeout(() => {
            setIsProgressActive(false);
        }, 5300);
    };

    const closeToast = () => {
        setIsActive(false);

        setTimeout(() => {
            setIsProgressActive(false);
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
    };

    return (
        <>
            <div>
                <div className={`toast ${isActive ? 'active' : ''}`}>
                    <div className="toast-content">
                        {isSuccess ?
                            (
                                <>
                                    <div className='bg-green-400 py-1 px-2  rounded-full'>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                    <div className="message">
                                        <span className="text text-1">Sucesss</span>
                                        <span className="text text-2">Il tuo messaggio è stato inviato</span>
                                    </div>
                                </>

                            )
                            :
                            (
                                <>
                                    <div className='bg-red-400 py-1 px-2  rounded-full'>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                    <div className="message">
                                        <span className="text text-1">Error</span>
                                        <span className="text text-2">{textError ? textError : 'Il tuo messaggio non è stato inviato'}</span>
                                    </div>
                                </>
                            )
                        }

                    </div>
                    <i className="fa-solid fa-xmark close" onClick={closeToast}></i>
                    <div className={`progress ${isProgressActive ? 'active' : ''}`}></div>
                </div>
            </div>
            <div onClick={showToast}>
                <Button text={textButton} />
            </div>
        </>
    );
}
