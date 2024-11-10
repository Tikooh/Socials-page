import { useState } from "react"
import { useSlime } from "./SlimeProvider"
import SlimeButtons from "../components/SlimeButtons"
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

    const { dispatch } = useSlime()

    const [saved, setSaved] = useState(false)

    const [selectedAction, setSelectedAction] = useState<Action>(initial_selected_action)

    const HandleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (selectedAction.actionType === "SAVE") {
            setSaved(true)
        }
        dispatch({type: selectedAction.actionType, payload: selectedAction.payload})
    }

    const content = saved
    ? 
        <p>Thank you for saving!</p>

    :
        <>
            <form onSubmit={(e) => HandleSubmit(e)} className="form__slime_buttons">
                <SlimeButtons OnActionSelect={(actionType, payload) => setSelectedAction({ actionType, payload })}></SlimeButtons>
            </form>
        </>

    return content


}

export default SpawnSlime