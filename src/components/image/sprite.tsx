type IconProps = {
    name: string
    className: string
}

export function Sprite({
    name,
    className
}: IconProps): JSX.Element {
    return (
        <svg className={className}>
            <use xlinkHref={`/sprite.svg#${name}`} />
        </svg>
    )
}