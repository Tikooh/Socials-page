import { createContext, ReactElement, useContext, useMemo, useReducer } from "react"

export type slime = {
    x: number,
    y: number,
    colour: string,
    name: string,
    tag: number,
}

type slimeContextType = {
    slime_list: slime[]
}

const initial_slime_state = {
    slime_list: []
}

export const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    EXPLODE: "EXPLODE",
    COLOUR: "COLOUR",
    NAME: "NAME"
}

type ReducerAction = {
    type: string,
    payload?: slime
}

const Reducer = (state: slimeContextType, action: ReducerAction): slimeContextType => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error()
            }
                
            const { x, y, colour, name, tag } = action.payload

            console.log(colour)

            const getRandomColour = (): string => {
                const randomColour = Math.floor(Math.random() * 0xffffff)
                return `#${randomColour.toString(16).padStart(6, '0')}`
            }
            console.log(state.slime_list)
            return { ...state, slime_list: [...state.slime_list, { x: x, y: y, colour: colour, name: name, tag: tag}]} 
        }

        case REDUCER_ACTION_TYPE.EXPLODE: {
            if (!action.payload) {
                throw new Error()
            }

            const {tag} = action.payload

            const filtered_slime_list = state.slime_list.filter(item => item.tag !== tag)

            return { ...state, slime_list: [...filtered_slime_list]}
        }

        case REDUCER_ACTION_TYPE.COLOUR: {
            if (!action.payload) {
                throw new Error()
            }

            const { colour } = action.payload

            return { ...state}
        }

        case REDUCER_ACTION_TYPE.NAME: {
            if (!action.payload) {
                throw new Error()
            }

            const { colour } = action.payload

            return { ...state}
        }

        default: {
            throw new Error()
        }
    }
}

const useSlimeContext = (initial_slime_state: slimeContextType) => {
    const [state, dispatch] = useReducer(Reducer, initial_slime_state)
    
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    },[])

    const slime_list = state.slime_list 

    return { dispatch, REDUCER_ACTIONS, slime_list }
}

type useSlimeContextType = ReturnType<typeof useSlimeContext>

const initial_slime_context_state: useSlimeContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    slime_list: []
}

export const slimeContext = createContext<useSlimeContextType>(initial_slime_context_state)

type childrenType = {
    children?: ReactElement
}

export const useSlime = () => {
    return useContext(slimeContext)
}


export const SlimeProvider = ({children}: childrenType): ReactElement => {

    return (
        <slimeContext.Provider value={useSlimeContext(initial_slime_state)}>
            {children}
        </slimeContext.Provider>
    )
}