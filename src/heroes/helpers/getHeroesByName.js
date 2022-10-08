import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
	name = name.toLocaleLowerCase().trim();
	if (name.length === 0) return [];
	/* Filtrar la matriz de héroes y devolver los que coincidan con el nombre. */
	return heroes.filter((hero) =>
		hero.superhero.toLocaleLowerCase().includes(name)
	);
};
