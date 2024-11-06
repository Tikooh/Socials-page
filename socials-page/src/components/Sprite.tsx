

const Sprite = () => {


    const img: string = new URL(`../images/slime.png`, import.meta.url).href

    const content = (
        <>
            <img src={img} alt="slime" className="img__slime"
                style={{
                    position: 'absolute',
                }}
            />
        </>
    )

    return content
}

export default Sprite
