interface BadgeProps {
    tech: string
}

export default function Badge({ tech }: BadgeProps) {
    return (
        <span className="inline-flex items-center m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600 cursor-pointer">
            <span className="ml-1">
                {tech}
            </span>
        </span>
    )
}
