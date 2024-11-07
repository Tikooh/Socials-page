
import { useSlime } from "../context/SlimeProvider"

const { REDUCER_ACTIONS } = useSlime()

type ActionButtonsProp = {
    OnActionSelect: (actionType: string) => void
}

const SlimeButtons = ({ OnActionSelect }: ActionButtonsProp) => {

    const content = (
        <>
            <div className="div__slime_buttons">
                <label className="label__slime">Slimes</label>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.ADD)}>Spawn</button>
                <button className="button__slime" onClick={() => OnActionSelect(REDUCER_ACTIONS.EXPLODE)}>Destroy</button>
            </div>
        </>
    )

    return content
}

export default SlimeButtons