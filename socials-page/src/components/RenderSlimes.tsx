import { useSlime } from "../context/SlimeProvider"
import Slime from "./Slime"
import { useEffect, useState } from "react"
import axios from "axios"


const RenderSlimes = () => {

    const {dispatch, REDUCER_ACTIONS, slime_list} = useSlime()

    const [slimes, setSlimes] = useState<typeof slime_list>([])

    const fetchSlimes = async (): Promise<typeof slime_list> => {
        const response = await axios.get('http://localhost:5000/slimes')

        const slime_data: typeof slime_list = response.data.visitor_slimes
        return slime_data
    }

    const getSlimes = async () => {
        const slime_data = await fetchSlimes()
        setSlimes(slime_data)
    }

    useEffect(() => {
        getSlimes()
    }, [])

    useEffect(() => {

        const intervalId = setInterval(() => {

            if (slimes.length !== 0) {
                const random_slime_index = Math.floor(Math.random() * slimes.length)

                const random_slime = slimes[random_slime_index]
                
                dispatch({ type: REDUCER_ACTIONS.ADD, payload: random_slime })
    
                setSlimes(slimes.filter(slime => slime.tag !== random_slime.tag))
            }
            else
            {
                clearInterval(intervalId)
            }


        }, 3000)

        return () => clearInterval(intervalId)
    }, [slimes])


    const content = (

        <div className="div__slime_spawn_point">
            {slime_list.map(slime => {
                return (
                    <Slime
                        key={slime.tag}
                        x={0}
                        y={0}
                        name={slime.name}
                        colour={slime.colour}
                        tag={slime.tag}
                    >
                    </Slime>
                )
            })}
        </div>

    )

    return content
}

export default RenderSlimes