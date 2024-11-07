import { slime } from "./RenderSlimes"


const Slime = ({ name, colour, tag }: slime) => {


    const img: string = new URL(`../images/slime.png`, import.meta.url).href

    const content = (
        <>

            <div className="div__slime_placeable">
                <p className="p__slime_name">{name}</p>
                <img src={img} alt="slime" className="img__slime"
                    style={{
                        position: 'absolute',
                    }}
                />
            </div>
        </>
    )

    return content
}

export default Slime
