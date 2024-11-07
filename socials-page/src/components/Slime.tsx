import { slime } from "./RenderSlimes"


const Slime = ({ name, colour, tag }: slime) => {


    const img: string = new URL(`../images/slime.png`, import.meta.url).href

    const content = (
        <>
            <p>{name}</p>
            <img src={img} alt="slime" className="img__slime"
                style={{
                    position: 'absolute',
                }}
            />
        </>
    )

    return content
}

export default Slime
