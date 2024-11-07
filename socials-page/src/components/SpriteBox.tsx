const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const xPos = e.clientX
    const yPos = e.clientY

    console.log(xPos)
}

const SpriteBox = () => {
    const content = (
        <>
            <div onClick={handleClick} className="div__slime_placeable">
            </div>
        </>
    )

    return content
}

export default SpriteBox