import { useSlime } from "../context/SlimeProvider"
import Slime from "./Slime"

export type slime = {
    colour: string,
    name: string,
    tag: number
}


const RenderSlimes = () => {

    const {slime_list} = useSlime()

    const content = (

        <div className="div__slime_spawn_point">
            {slime_list.map(slime => {
                return (
                    <Slime
                        key={slime.tag}
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