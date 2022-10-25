let initialState = {
	users: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "add_new_cred":
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
export default userReducer;
