import '@/css/btnCircle.scss'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CircleButtonProps {
    icon: IconDefinition,
    link: string
}

export default function CircleButton({ icon, link }: CircleButtonProps) {
    return (
        <a target='_blank' href={link}>
            <button className='btnCircle flex justify-center items-center text-white text-xl shadow-2xl'>
                <FontAwesomeIcon icon={icon} />
            </button>
        </a>
    )
}
