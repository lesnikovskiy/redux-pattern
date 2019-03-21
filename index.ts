import { Action } from "./Action";
import { Reducer } from "./Reducer";

let reducer: Reducer<number> = (state:  number, action: Action) => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }

    return state;
};

const incrementAction: Action = { type: "INCREMENT" };
console.log(reducer(1, incrementAction));

const decrementAction: Action = { type: "DECREMENT" };
console.log(reducer(1, decrementAction));
