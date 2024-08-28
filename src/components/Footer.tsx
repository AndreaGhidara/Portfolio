import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import CircleButton from './CircleButton'

const socialPresence = [
    {
        id: 0,
        name: 'github',
        linkAccount: 'https://github.com/AndreaGhidara',
        icon: faGithub,
    },
    {
        id: 1,
        name: 'likedin',
        linkAccount: 'https://www.linkedin.com/in/andrea-ghidara/',
        icon: faLinkedinIn,
    },
]

export default function Footer() {
    return (
        <section className='flex justify-center px-5'>
            <div className='flex justify-between py-5 container_custom'>
                <div className='flex gap-3'>
                    {socialPresence.map((social, index) => (
                        <CircleButton key={index} icon={social.icon} link={social.linkAccount} />
                    ))}
                </div>
                <div className='flex items-center'>
                    <h1>Created by @Andrew-Dev</h1>
                </div>
            </div>
        </section>
    )
}
