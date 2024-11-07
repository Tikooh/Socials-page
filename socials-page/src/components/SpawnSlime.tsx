import { useState } from "react"
import { useSlime } from "../context/SlimeProvider"
import SlimeButtons from "./SlimeButtons"
import SpriteBox from "./SpriteBox"

const SpawnSlime = () => {

    // const { dispatch, slime_list } = useSlime()

    const [selectedAction, setSelectedAction] = useState("")

    const content = (

        <>
            <SlimeButtons OnActionSelect={(actionType) => setSelectedAction(actionType)}></SlimeButtons>
            <SpriteBox></SpriteBox>


            
        </>

    )

    return content


}

export default SpawnSlime