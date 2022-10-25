import React, { useState } from "react";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			navigate("/", { replace: true });
			console.log(user);
		} catch (err) {
			console.log(err);
		}
		setEmail("");
		setPassword("");
	};
	const googleSubmit = async () => {
		try {
			const user = await signInWithPopup(auth, provider);
      navigate("/",  {replace:true})
			console.log(user);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>
			<label>Email</label>
			<br />
			<input type="email" onChange={(e) => setEmail(e.target.value)} />
			<br />
			<label>Password</label>
			<br />
			<input type="password" onChange={(e) => setPassword(e.target.value)} />
			<br />
			<button onClick={handleSubmit}>login </button>
			<button onClick={googleSubmit}> LOGIN WITH GOOGLE</button>
		</div>
	);
}

export default Login;
