import { useState } from "react"
import { useSlime } from "./SlimeProvider"
import SlimeButtons from "../components/SlimeButtons"
import SpriteBox from "../components/SpriteBox"
import { slime } from "./SlimeProvider"

const SpawnSlime = () => {

    type Action = {
        actionType: string,
        payload: slime | undefined
    }

    const initial_selected_action = {
        actionType: '',
        payload: {x: 0, y: 0, colour: '', name: '', tag: 0}
    }

    const { dispatch, slime_list } = useSlime()

    const [selectedAction, setSelectedAction] = useState<Action>(initial_selected_action)

    const HandleSubmit = () => {
        dispatch({type: selectedAction.actionType, payload: selectedAction.payload})
        console.log(slime_list)
    }

    const content = (

        <>
            <form onSubmit={() => HandleSubmit()}>
                <SlimeButtons OnActionSelect={(actionType, payload) => setSelectedAction({ actionType, payload })}></SlimeButtons>
            </form>

            <SpriteBox></SpriteBox>
        </>

    )

    return content


}

export default SpawnSlime