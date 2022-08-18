import React, { useState, useEffect } from "react";

function Hello() {
	const [user, setUser] = useState([]);

	const arr = async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const json = await res.json();
			setUser(json);
			console.log(json);
		} 
		catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		arr();
	}, []);

	return (
		<>
			{user.map((item) => {
				return (
					<div key={item.id}>
						<h1>names:{item.name}</h1>
					</div>
				);
			})}
		</>
	);
}

export default Hello;
