// import User from "./components/UserA";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Fusers from "./components/Movies";
import Routers from "./Routers";
import Home from "./pages/Home";
import { auth } from "./firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import { dispatches } from "./actions/AuthActions";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(dispatches(user));
			} else {
				dispatch(dispatches(null));
			}
		});
	}, []);

	return (
		<div>
			{/* <Movies /> */}
			{/* <User /> */}
			{/* <Home /> */}
			<Routers />
		</div>
	);
}

export default App;
