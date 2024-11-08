import { useEffect, useState } from "react"
import { slime } from "./RenderSlimes"


const Slime = ({ name, colour, tag }: slime) => {


    const [position, setPosition] = useState(0)

    const surfaceWidth = window.innerWidth

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => (prev + 1) % surfaceWidth)
        }, 75)

        return () => clearInterval(interval)
    },[])


    const img: string = new URL(`../images/slime.png`, import.meta.url).href

    const content = (
        <>

            <div className="div__slime_placeable"
            style={{
                position: 'absolute',
                left: position,
            }}>
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
