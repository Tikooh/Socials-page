import { useEffect, useState } from "react"
import { slime } from "./RenderSlimes"


const Slime = ({ name, colour }: slime) => {


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
                <img src={img} alt="slime" className="img__slime"
                    style={{
                        filter: 'grayscale(100%)',
                        position: 'absolute',
                    }}
                />
                
                <p className="p__slime_name"
                style={{
                    zIndex: 3,
                }}>{name}</p>

                <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '90%',
                    backgroundColor: colour,
                    mixBlendMode: 'multiply',
                    opacity: 1,
                    borderRadius: '50%',
                }}>
                </div>
            </div>
        </>
    )

    return content
}

export default Slime
