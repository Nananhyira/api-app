import React from "react";
import Fusers from "../components/Movies";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const handleSubmit = () => {
		try {
			signOut(auth);
			navigate("/register", { replace: true });
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<button onClick={handleSubmit}>SIGN OUT</button>
			<Fusers />
		</div>
	);
}

export default Home;
