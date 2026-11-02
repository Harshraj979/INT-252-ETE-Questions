import StudentApplication from "./Q4a";

export default function Q4() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
            <StudentApplication render={(props) => (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Student 1</h2>
                    <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={props.name}
                            onChange={(e) => props.setName(e.target.value)}
                            className="border p-2 rounded"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={props.email}
                            onChange={(e) => props.setEmail(e.target.value)}
                            className="border p-2 rounded"
                            required
                        />
                        <button className="bg-amber-600 text-white p-2 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            )} />

            <StudentApplication
                render={(props) => (
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Student 2</h2>
                        <form onSubmit={props.handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                value={props.name}
                                onChange={(e) => props.setName(e.target.value)}
                                className="border p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Enter Email"
                                value={props.email}
                                onChange={(e) => props.setEmail(e.target.value)}
                                className="border p-2 rounded"
                                required
                            />
                            <button className="bg-green-600 text-white p-2 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            />
        </div>
    )
}