import { AuthContext } from './AuthContext';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from './types/types';

const int = () => {
	// obtener el estado inicial
	const user = JSON.parse(localStorage.getItem('user'));
	return {
		// !! -> convierte a boolean
		logged: !!user,
		user,
	};
};
export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, int);

	const login = (name = '') => {
		const action = {
			type: types.login,
			payload: {
				id: '123',
				name,
			},
		};
		// aquí se guarda el usuario en el localStorage
		localStorage.setItem('user', JSON.stringify(action.payload));
		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem('user');
		const action = {
			type: types.logout,
		};
		dispatch(action);
	};
	return (
		<>
			<AuthContext.Provider value={{ authState, login, logout }}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

// default props
AuthProvider.defaultProps = {
	children: null,
};

// usar props types
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
