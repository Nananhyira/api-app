import React, { Component } from "react";

class User extends Component {
	constructor(props) {
		super();
		this.state = { user: [] };
		// console.log(this.state.user);
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				console.log("users:", users);
				this.setState({ user: users });
			})
			.catch((err) => {
				console.log("error:", err);
			});
	}

	render() {
		return (
			<>
				{this.state.user.map((user, index) => {
					return (
						<div key={user.id} class>
							<h1>name:{user.name} </h1>
							<h1> id:{user.id} </h1>
							<h1>username:{user.username} </h1>
							<h1> website:{user.website} </h1>
							<h1>
								address:{user.address.street},{user.address.suite}
							</h1>
							<h1>email:{user.email} </h1>
							<h1>{user.phone} </h1>
							<h1>{user.company.name} </h1>
							<hr />
						</div>
					);
				})}
			</>
		);
	}
}

export default User;
