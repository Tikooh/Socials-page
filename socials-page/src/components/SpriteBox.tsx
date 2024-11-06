const handleClick = (): void => {
    console.log("hi")
}

const SpriteBox = () => {
    const content = (
        <>
            <div onClick={() => handleClick()} className="div__slime_placeable">
            </div>
        </>
    )

    return content
}

export default SpriteBox