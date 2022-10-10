import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const LoginPage = () => {
	const navigate = useNavigate();
	// dar acceso al useContext
	const { login } = useContext(AuthContext);
	const onLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/';
		login('Skierhy');
		navigate(lastPath, { replace: true });
	};
	return (
		<>
			<div className=''>
				<div>
					<h1>Login</h1>
					<hr />
					<button className='btn btn-primary' onClick={onLogin}>
						Login
					</button>
				</div>
			</div>
		</>
	);
};
