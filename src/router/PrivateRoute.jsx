import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/auth/AuthContext';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
	// children es el componente que se va a renderizar
	// si el usuario esta autenticado
	// extraer el usuario del context
	const { authState } = useContext(AuthContext);
	// desestructurar el si esta login
	const { logged } = authState;
	const { pathname, search } = useLocation();
	const lastPath = pathname + search;
	localStorage.setItem('lastPath', lastPath);
	// si no esta login, redireccionar a login
	return logged ? children : <Navigate to={'/login'} />;
};

// props types
PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
