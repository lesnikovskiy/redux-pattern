import { Action } from "./Action";
import { Reducer } from "./Reducer";
import { Store } from "./Store";

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

const store = new Store<number>(reducer, 0);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

const incrementAction: Action = { type: "INCREMENT" };
store.dispatch(incrementAction);

const decrementAction: Action = { type: "DECREMENT" };
store.dispatch(decrementAction);

const unknownAction: Action = { type: "UNKNOWN" };
store.dispatch(unknownAction);

const plusAction: Action = { type: "PLUS", payload: 50 };
store.dispatch(plusAction);

unsubscribe();
