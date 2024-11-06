import { createContext, ReactElement, useMemo, useReducer } from "react"

type slime = {
    top: number,
    left: number,
    colour: string,
}

type slimeContextType = {
    slime_list: slime[]
}

const initial_slime_state = {
    slime_list: []
}

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    EXPLODE: "EXPLODE",
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
                
            const { top, left } = action.payload

            const getRandomColour = (): string => {
                const randomColour = Math.floor(Math.random() * 0xffffff)
                return `#${randomColour.toString(16).padStart(6, '0')}`
            }

            return { ...state, slime_list: [...state.slime_list, { top, left, colour: getRandomColour()}]} 
        }

        case REDUCER_ACTION_TYPE.EXPLODE: {
            if (!action.payload) {
                throw new Error()
            }

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

export const SlimeProvider = ({children}: childrenType): ReactElement => {

    return (
        <slimeContext.Provider value={useSlimeContext(initial_slime_state)}>
            {children}
        </slimeContext.Provider>
    )
}