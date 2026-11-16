import { Provider } from "react-redux";
import store from "./Q25a";
import DynamicForm from "./Q25b";

export default function Q25() {
    return (
        <Provider store={store}>
            <DynamicForm />
        </Provider>
    );
}