import { Provider } from "react-redux";
import store from "./Q18";
import TodoList from "./Q18.jsx";

export default function Q18() {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );
}