
import { useState } from "react"
import { useSlime } from "../context/SlimeProvider"
import { slime } from "../context/SlimeProvider"
import axios from "axios"

type ActionButtonsProp = {
    OnActionSelect: (actionType: string, payload?: slime | undefined) => void
}

const SlimeButtons = ({ OnActionSelect }: ActionButtonsProp) => {

    const { slime_list, REDUCER_ACTIONS } = useSlime() //this has to be inside the main function

    const [colour, setColour] = useState("")

    const [name, setName] = useState("")

    const addSlime = async (newSlime: slime) => {
        try {
            const response = await axios.post('http://localhost:5000/slimes', newSlime)
            console.log(response.data)

        }
        catch {
            throw new Error()
        }
    }

    const handleAdd = () => {

        const slime_json: slime = {
            x: 0,
            y: 0,
            colour: colour,
            name: name,
            tag: Math.floor(Math.random() * 1_000_000)
        }

        addSlime(slime_json)
        OnActionSelect(REDUCER_ACTIONS.ADD, { x: 0, y: 0, colour: colour, name: name, tag: Math.floor(Math.random() * 1_000_000)})

    }

    const content = (
        <>
            <div>
                <label className="label__slime">Slimes</label>
                <button className="button__slime" onClick={() => handleAdd()}>Spawn</button>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.EXPLODE, {x: 0, y: 0, colour: '', name: name, tag: slime_list[Math.floor(Math.random()*slime_list.length)].tag})}>Destroy</button>
                <input type="text" className="input__text" onChange={(e) => setName(e.target.value)}></input>
                <input type="color" value={colour} onChange={(e) => setColour(e.target.value)} className="input__colour"></input>
            
            </div>
        </>
    )

    return content
}

export default SlimeButtons