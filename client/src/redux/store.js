import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
