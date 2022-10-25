import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ children, details }) {
	if (!details) {return <Navigate to="/login" replace="true" />}

	return children;
}
const mapStateToProps = (state) => {
	return { details: state.Authreducer.loginUsers };
};

export default connect(mapStateToProps)(ProtectedRoute);
