import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				{/*
				/* es cualquier otra ruta que no sea login
				*/}
				<Route path='/*' element={<HeroesRoutes />} />
			</Routes>
		</>
	);
};
