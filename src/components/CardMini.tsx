import CircleButton from "./CircleButton";
import '@/css/cardMini.scss';

export default function CardMini() {
    return (
        <div className="cardMini">
            <div className="flex justify-end">
                <CircleButton />
            </div>
            <h1>Nome Progetto</h1>
            <h2>Sotto Titolo </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nisi deleniti quo ea repellat consequuntur repellendus commodi, provident impedit corrupti? Dicta illum molestiae animi, quisquam corporis perferendis harum itaque excepturi.</p>
            <div className="flex gap-5">
                <p>tag</p>
                <p>tag</p>
                <p>tag</p>
                <p>tag</p>
                <p>tag</p>
                <p>tag</p>
            </div>
        </div>
    )
}
