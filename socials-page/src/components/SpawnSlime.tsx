import { useState } from "react"
import { useSlime } from "../context/SlimeProvider"
import SlimeButtons from "./SlimeButtons"
import SpriteBox from "./SpriteBox"

const SpawnSlime = () => {

    const { dispatch, slime_list } = useSlime()

    const [selectedAction, setSelectedAction] = useState("")

    const HandleSubmit = () => {
        dispatch({type: selectedAction, payload: { x: 0, y: 0, colour: "#ffffff", name: "bob", tag: Math.floor(Math.random() * 1_000_000)} })
        console.log(slime_list)
    }

    const content = (

        <>
            <form onSubmit={() => HandleSubmit()}>
                <SlimeButtons OnActionSelect={(actionType) => setSelectedAction(actionType)}></SlimeButtons>
            </form>

            <SpriteBox></SpriteBox>
        </>

    )

    return content


}

export default SpawnSlime