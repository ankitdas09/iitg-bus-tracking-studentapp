import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:8000", {
	transports: ["websocket"],
	auth: {
		id: "AS022022",
		token: "IITG",
	},
});
function App() {
	useEffect(() => {
		socket.on("connect", () => {
			console.log("connected");
		});
	}, []);

	const [id, setId] = useState("");

	const handleChange = (e) => {
		setId(e.target.value);
	};
	const disconnect = () => {
		socket.disconnect();
	};
	const joinBusRoom = (busId) => {
		if (!busId) return;
		socket.emit("join", busId, function () {
			console.log("cant join");
		});
	};
	return (
		<div className="container">
			<section>
				<label htmlFor="">Enter bus ID</label>
				<input type="text" name="" id="" onChange={handleChange} />
				<button onClick={() => joinBusRoom(id)}>Track</button>
				<button onClick={() => disconnect(id)}>Disconnect</button>
			</section>
		</div>
	);
}

export default App;
