import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				{/* <Route
					path='/login/*'
					element={
						<PublicRoute>
							<Routes>
								<Route path='/*' element={<LoginPage />} />
							</Routes>
						</PublicRoute>
					}
				/> */}
				{/*
				/* es cualquier otra ruta que no sea login
				*/}
				{/*
				/* si no esta logueado, redirecciona a login
				*/}
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
				{/* <Route path='/*' element={<HeroesRoutes />} /> */}
			</Routes>
		</>
	);
};
