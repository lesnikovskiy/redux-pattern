import { Store } from "../Store";
import { AppState } from "./AppState";
import { reducer } from "./reducer";
import { AddMessageAction, DeleteMessageAction } from "./actions";

const store = new Store<AppState>(reducer, { messages: [] });

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "ADD_MESSAGE", message: "Hello World!!!" } as AddMessageAction);
store.dispatch({ type: "ADD_MESSAGE", message: "Hello SUN!!!" } as AddMessageAction);
store.dispatch({ type: "DELETE_MESSAGE", index: 1 } as DeleteMessageAction)
store.dispatch({ type: "ADD_MESSAGE", message: "Hello Venus!!!" } as AddMessageAction);

unsubscribe();
