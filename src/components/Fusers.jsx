import React from "react";
import { useState, useEffect } from "react";

function Fusers() {
	const [user, setUser] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				console.log("users:", users);
				setUser(users);
			})
			.catch((err) => {
				console.log("error:", err);
			});
	}, []);

	return (
		<>
			<h1>users</h1>
			{user.map((item) => {
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
