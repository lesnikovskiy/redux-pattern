import { Action } from "./Action";
import { Reducer } from "./Reducer";

let reducer: Reducer<number> = (state:  number, action: Action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "PLUS":
            return state + action.payload;
        default:
            return state;
    }
};

const incrementAction: Action = { type: "INCREMENT" };
console.log(reducer(1, incrementAction));

const decrementAction: Action = { type: "DECREMENT" };
console.log(reducer(1, decrementAction));

const unknownAction: Action = { type: "UNKNOWN" };
console.log(reducer(1, unknownAction));

const plusAction: Action = { type: "PLUS", payload: 50 };
console.log(reducer(10, plusAction));
