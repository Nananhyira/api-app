import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchMovie } from "../actions/MovieAction";

function Fusers() {
	const dispatch = useDispatch();
	const users = useSelector((state) => {
		return state.userReducer.users;
	});
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				console.log("users:", users);
				setUser(users);
				dispatch(dispatchMovie(users));
			})
			.catch((err) => {
				console.log("error:", err);
			});
	}, []);

	return (
		<>
			<h1>users</h1>
			{users.map((item) => {
				return (
					<div key={item.id}>
						<h1>name:{item.name} </h1>
						<h1> id:{item.id} </h1>
						<h1>username:{item.username} </h1>
						<h1> website:{item.website} </h1>
						<h1>{item.company.name}</h1>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export default Fusers;
