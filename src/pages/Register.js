import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			navigate("/login", { replace: true });
			console.log(user);
		} catch (err) {
			console.log(err);
		}
		setEmail("");
		setpassword("");
	};
	const googleSubmit = async () => {
		try {
			const user = await signInWithPopup(auth, provider);
			navigate("/", { replace: true });
			console.log(user);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<h1>registratioin Page</h1>
			<label>Email</label>
			<br />
			<input
				type="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<br />
			<label>Password</label>
			<br />
			<input
				type="password"
				value={password}
				onChange={(e) => {
					setpassword(e.target.value);
				}}
			/>
			<br />
			<button onClick={handleSubmit}>crEATE aCCOUNT</button>
			<button onClick={googleSubmit}>CREATE ACCOUNT WITH GOOGLE</button>
		</div>
	);
}

export default Register;
