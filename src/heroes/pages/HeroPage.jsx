import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers';

export const HeroPage = () => {
	// useParams() es un hook de react-router-dom que nos permite obtener los parámetros de la url
	const { id } = useParams();
	// useMemo() es un hook de react que nos permite memorizar un valor, en este caso el resultado de la función getHeroesById
	// si el id cambia, se vuelve a ejecutar la función
	const hero = useMemo(() => getHeroesById(id), [id]);
	// useNavigate() es un hook de react-router-dom que nos permite navegar a una ruta
	const navigate = useNavigate();
	const onNavigateBack = () => {
		navigate(`/${hero.publisher === 'DC Comics' ? 'dc' : 'marvel'}`);
		// otra forma de hacerlo
		// navigate(-1);
	};

	const styles = {
		color: '#ffffff',
	};

	// esta condición es para que si no existe el id del héroe, redirija a la pagina de heroes
	if (!hero) return <Navigate to='/' />;
	return (
		<>
			<div className='row mt-5 animate__animated animate__flipInX'>
				<div className='col-xl-4 col-sm-12'>
					<img
						src={`/assets/heroes/${id}.jpg`}
						alt={hero.superhero}
						className='img-thumbnail'
					/>
				</div>
				<div className='col-xl-8 col-sm-12 mt-3'>
					<h3>{hero.superhero}</h3>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							<b>Alter ego: </b>
							{hero.alterEgo}
						</li>
						<li className='list-group-item'>
							<b>Publisher: </b>
							{hero.publisher}
						</li>
						<li className='list-group-item'>
							<b>First appearance: </b>
							{hero.firstAppearance}
						</li>
					</ul>
					<h5 className='mt-3' style={styles}>
						Characters
					</h5>
					<p style={styles}>{hero.characters}</p>
					<button
						className='btn btn-outline-info'
						onClick={onNavigateBack}
					>
						Return
					</button>
				</div>
			</div>
		</>
	);
};
