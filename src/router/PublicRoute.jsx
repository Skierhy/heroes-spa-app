import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
	const { authState } = useContext(AuthContext);
	const { logged } = authState;
	const shows = !logged ? children : <Navigate to={'/login'} />;
	return shows;
};

// default props
PublicRoute.defaultProps = {
	children: null,
};

// propsTypes
PublicRoute.propsTypes = {
	children: PropTypes.any,
};
