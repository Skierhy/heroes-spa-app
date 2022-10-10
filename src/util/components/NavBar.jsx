import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const NavBar = (props) => {
	// es un custom hook que nos permite navegar entre rutas
	const navigate = useNavigate();
	const { authState, logout } = useContext(AuthContext);
	const { user } = authState;
	const onLogout = () => {
		// ruta que queremos navegar
		// el segundo argumento es un objeto con opciones
		// replace: true -> reemplaza la ruta actual por la nueva
		// evita que el usuario pueda volver a la ruta anterior
		logout();
		navigate('/login', { replace: true });
	};
	return (
		<nav className='navbar navbar-expand-lg bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Asociaciones
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavDropdown'
					aria-controls='navbarNavDropdown'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarNavDropdown'
				>
					<div className='navbar-nav'>
						<NavLink
							className={({ isActive }) =>
								`nav-link nav-item${
									isActive ? 'active' : undefined
								}`
							}
							to='/marvel'
						>
							Marvel
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link nav-item ${
									isActive ? 'active' : undefined
								}`
							}
							to='/dc'
						>
							DC
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link nav-item ${
									isActive ? 'active' : undefined
								}`
							}
							to='/search'
						>
							Search
						</NavLink>
						<span className='nav-item nav-link text-info'>
							{/* que no de error */}
							{user?.name}
						</span>
						<button
							className='nav-item nav-link btn'
							onClick={onLogout}
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
