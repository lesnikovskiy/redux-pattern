import { Reducer } from "./Reducer";
import { Action } from "./Action";
import { ListenerCallback, UnsubscribeCallback } from "./listeners";

export class Store<T> {
    private _state: T;
    private _listeners: ListenerCallback[] = [];

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
        this._state = initialState;
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: ListenerCallback) => listener());
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        
        return () => {
            this._listeners = this._listeners.filter(x => x !== listener);
        }
    }
}
