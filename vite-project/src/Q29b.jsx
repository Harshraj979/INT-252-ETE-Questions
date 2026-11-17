
import ToggleButton from "./Q29";

export default function Q29() {
    return (
        <div>
            <h2 className="text-xl font-bold text-center mt-5">
                Toggle Button
            </h2>

            {/* Initially OFF and enabled */}
            <ToggleButton initialState={false} disabled={false} />

            {/* Initially ON and disabled */}
            <ToggleButton initialState={true} disabled={true} />
        </div>
    );
}
