import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
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
						<span className='nav-item nav-link text-info'>
							Skierhy
						</span>
						<button className='nav-item nav-link btn'>
							Logout
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
