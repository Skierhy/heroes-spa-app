import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// functional component local
const CharactersByHero = ({ alterEgo, characters }) => {
	// if (alterEgo === characters) return <></>;
	// return <p className='card-text'>{characters}</p>;
	return alterEgo === characters ? (
		<></>
	) : (
		<p className='card-text'>{characters}</p>
	);
};

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alterEgo,
	firstAppearance,
	characters,
}) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;
	// const charactersByHero = <p className='card-text'>{characters}</p>;
	return (
		<>
			<div className='col'>
				<div className='card'>
					<div className='row no-gutters'>
						<div className='col-4'>
							<img
								src={heroImageUrl}
								alt={superhero}
								className='card-img'
							/>
						</div>
						<div className='col-8 animate__animated animate__fadeInRight'>
							<div className='card-body'>
								<h5 className='card-title'>{superhero}</h5>
								<p className='card-text'>{alterEgo}</p>
								{/*
									// en caso de que el alterEgo sea igual al characters
									// no se muestra el componente
								*/}
								{alterEgo !== characters && (
									<CharactersByHero
										characters={characters}
										alterEgo={alterEgo}
									/>
								)}
								<p className='card-text'>
									<small className='text-muted'>
										{firstAppearance}
									</small>
								</p>
								{/*
									// lo que hace en esta parte es que cuando se le de click al botón
									// se va a redireccionar a la ruta /hero/es el id del héroe
								*/}
								<Link to={`/hero/${id}`}>More...</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

HeroCard.defaultProps = {
	id: '',
	superhero: '',
	publisher: '',
	alterEgo: '',
	firstAppearance: '',
	characters: '',
};

CharactersByHero.defaultProps = {
	alterEgo: '',
	characters: '',
};

CharactersByHero.propTypes = {
	alterEgo: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};

HeroCard.propTypes = {
	id: PropTypes.string.isRequired,
	superhero: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	alterEgo: PropTypes.string.isRequired,
	firstAppearance: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};
