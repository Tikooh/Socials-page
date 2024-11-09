
import { useSlime } from "../context/SlimeProvider"
import { slime } from "../context/SlimeProvider"

type ActionButtonsProp = {
    OnActionSelect: (actionType: string, payload?: slime | undefined) => void
}

const SlimeButtons = ({ OnActionSelect }: ActionButtonsProp) => {

    const { slime_list, REDUCER_ACTIONS } = useSlime() //this has to be inside the main function
    const content = (
        <>
            <div className="div__slime_buttons">
                <label className="label__slime">Slimes</label>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.ADD, { x: 0, y: 0, colour: "#ffffff", name: "bob", tag: Math.floor(Math.random() * 1_000_000)})}>Spawn</button>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.EXPLODE, {x: 0, y: 0, colour: '', name: 'bob', tag: slime_list[Math.floor(Math.random()*slime_list.length)].tag})}>Destroy</button>
                <input type="text"></input>
                <input type="color" value="#ffffff"></input>
            
            </div>
        </>
    )

    return content
}

export default SlimeButtons