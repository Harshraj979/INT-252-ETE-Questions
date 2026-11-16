import { Provider } from "react-redux";
import store from "./Q21a";
import Cart from "./Q21b";

export default function Q21() {
    return (
        <Provider store={store}>
            <Cart />
        </Provider>
    );
}