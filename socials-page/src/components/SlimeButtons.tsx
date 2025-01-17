
import { useState } from "react"
import { useSlime } from "../context/SlimeProvider"
import { slime } from "../context/SlimeProvider"

type ActionButtonsProp = {
    OnActionSelect: (actionType: string, payload?: slime | undefined) => void
}

const SlimeButtons = ({ OnActionSelect }: ActionButtonsProp) => {

    const { slime_list, REDUCER_ACTIONS } = useSlime() //this has to be inside the main function

    const [colour, setColour] = useState("")

    const [name, setName] = useState("")


    const content = (
        <>
            <div>
                <label className="label__slime">Add yourself to the website!</label>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.ADD, { x: 0, y: 0, colour: colour, name: name, tag: Math.floor(Math.random() * 1_000_000_000)})}>Add</button>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.EXPLODE, {x: 0, y: 0, colour: '', name: name, tag: slime_list[Math.floor(Math.random()*slime_list.length)].tag})}>Delete</button>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.SAVE, {x: 0, y: 0, colour: colour, name: name, tag: Math.floor(Math.random() * 1_000_000_000)})}>Save</button>
                <input type="text" className="input__text" onChange={(e) => setName(e.target.value)}></input>
                <input type="color" value={colour} onChange={(e) => setColour(e.target.value)} className="input__colour"></input>
            
            </div>
        </>
    )

    return content
}

export default SlimeButtons