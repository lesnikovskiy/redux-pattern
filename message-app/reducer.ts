import { AppState } from "./AppState";
import { AddMessageAction, DeleteMessageAction } from "./actions";
import { Reducer } from "../Reducer";
import { Action } from "../Action";

export var reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
    switch(action.type) {
        case "ADD_MESSAGE": {
            return {
                messages: state.messages.concat((<AddMessageAction>action).message)
            }
        }
        case "DELETE_MESSAGE": {
            const idx = (<DeleteMessageAction>action).index;

            return {
                messages: [...state.messages.slice(0, idx), ...state.messages.slice(idx + 1, state.messages.length)]
            }
        }
        default: {
            return state;
        }
    }
};
