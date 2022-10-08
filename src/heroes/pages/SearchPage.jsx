import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

const styles = {
	color: '#ffffff',
};

export const SearchPage = () => {
	// useNavigate es un hook que nos permite navegar a una ruta
	const navigate = useNavigate();
	// useLocation es un hook que nos permite obtener la ruta actual
	const location = useLocation();
	// siempre recibe un string
	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);
	const { searchText, onInputChange } = useForm({
		searchText: q,
	});
	const onSearchSubmit = (e) => {
		e.preventDefault();
		if (searchText.trim().length <= 1) return;
		// en esta linea se hace la navegación
		// a la ruta /search?query=batman
		navigate(`?q=${searchText}`);
	};
	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className='row'>
				<div className='col-xl-5 col-sm-12'>
					<h4 style={styles}>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type='text'
							placeholder='Find your hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
						<button
							type='submit'
							className='btn mt-3 btn-block btn-outline-primary'
						>
							Search...
						</button>
					</form>
				</div>
				<div className='col-xl-7 col-sm-12'>
					<h4 style={styles} className='mt-2'>
						Results
					</h4>
					<hr />
					{q === '' ? (
						<div className='alert alert-info'>Search a hero</div>
					) : (
						heroes.length === 0 && (
							<div className='alert alert-danger'>
								There is no a hero with <b>{q}</b>
							</div>
						)
					)}
					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};
