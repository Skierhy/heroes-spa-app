import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../util/';
import { FooterApp } from '../../util/components/FooterApp';
import { DcPage, MarvelPage, SearchPage } from '../pages';
import { HeroPage } from '../pages/HeroPage';

export const HeroesRoutes = () => {
	return (
		<>
			<NavBar />
			<div className='container'>
				<Routes>
					<Route path='/marvel' element={<MarvelPage />} />
					<Route path='/dc' element={<DcPage />} />
					<Route path='/search' element={<SearchPage />} />
					{/*
					// aquí mandamos un comodín para que nos redirecciona a la ruta que le pasemos
					*/}
					<Route path='/hero/:id' element={<HeroPage />} />
					<Route path='/*' element={<Navigate to={'/marvel'} />} />
				</Routes>
			</div>
			<FooterApp />
		</>
	);
};
