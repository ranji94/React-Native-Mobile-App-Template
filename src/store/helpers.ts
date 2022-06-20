import { AppDispatch } from "./store"

export const buildMapDispatchToPropsObject = (dispatch: AppDispatch, actions: object) => {
    const dispatchers: any = {}

    Object.entries(actions).forEach(action => {
        const [actionName, actionFunction] = action
        dispatchers[actionName] = (...args: any[]) => dispatch(actionFunction(args))
    })

    return dispatchers
}

export const buildMapStateToPropsObject = (state: any, sliceName: string) => state[sliceName]