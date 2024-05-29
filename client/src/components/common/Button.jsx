const Button = ({
    clickhandler,
    label,
    icon,
    addClass,
    color   
}) => {
    const dynamicColor = `bg-${color}`
    return(
        <>
            <button onClick={clickhandler} 
            className={`
            flex
            items-center
            gap-2
            border
            text-gray-100
            ${dynamicColor}
            border-gray-300
            rounded-3xl
            py-1 px-7
            text-[14px]
            ${addClass}
            `}>{label} {icon}</button>
        </>
    )
}

export default Button;