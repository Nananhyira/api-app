import React, { useState, useEffect } from "react";
import axios from "axios";

function UserA() {
	const [user, setUser] = useState([]);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				console.log(response);
				setUser(response.data);
			}).catch((error)=>{console.log(error)});
	}, [user]);
	return (
		<>
			<h1>users</h1>
			{user.map((item) => {
				return (
					<div key={item.posttId}>
						<h1>name:{item.name} </h1>
						<h1> id:{item.body} </h1>
						{/* <img src={item.url} />
						<h1> website:{item.albumId} </h1>
						<img src={item.thumbnailUrl} />
						 */}
						<hr />
					</div>
				);
			})}
		</>
	);
}

export default UserA;
