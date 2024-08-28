import '@/css/btn.scss'

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="btn">
      {text ?? 'no text'}
    </button>
  )
}
