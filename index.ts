import { Action } from "./Action";
import { Reducer } from "./Reducer";

let reducer: Reducer<number> = (state:  number, action: Action) => {
    return state;
};

console.log(reducer(0, null));
