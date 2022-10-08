import { getHeroesByPublisher } from "../helpers";
import { PropTypes } from "prop-types";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	return (
		<>
			{/*
			row rows-cols-1 row-cols-md-3 g-3
			// https://getbootstrap.com/docs/5.0/layout/grid/
			*/}
			<div className='row rows-cols-1 row-cols-md-3 g-3'>
				{heroes.map((hero) => {
					// {...hero}
					// es lo mismo que
					// id={hero.id}
					// superhero={hero.superhero}
					// publisher={hero.publisher}
					return <HeroCard key={hero.id} {...hero} />;
				})}
			</div>
		</>
	);
};

HeroList.defaultProps = {
	publisher: "",
};

HeroList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
