import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
	beforeEach(() => jest.clearAllMocks());

	test('debe de mostrarse correctamente con valores por defecto', () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);
		// se hará un snapshot del componente
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar a Batman y el input con el valor del queryString', () => {
		// initialEntries={['/search?q=batman']
		// es para simular la ruta actual
		// en este caso es la ruta /search?q=batman
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchPage />
			</MemoryRouter>
		);
		// se espera que el input tenga el valor batman
		const input = screen.getByRole('textbox');
		expect(input.value).toBe('batman');

		// debe la imagen debe que tener el atributo para mostrar la imagen
		const img = screen.getByRole('img');
		expect(img.src).toContain('/images/heroes/dc-batman.jpg');

		// se espera que el h5 tenga el valor batman
		const h5 = screen.getByText('Batman');
		expect(h5).toBeTruthy();
	});

	test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<SearchPage />
			</MemoryRouter>
		);
		// el alert debe que contener el texto 'No hay un hero con batman123'
		const alert = screen.getByLabelText('alert-danger');
		expect(alert.innerHTML).toContain('batman123');
	});

	test('debe de llamar el navigate a la pantalla nueva', () => {
		const inputValue = 'superman';

		render(
			<MemoryRouter initialEntries={['/search']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		// change es para simular el cambio de valor en el input
		fireEvent.change(input, {
			target: { name: 'searchText', value: inputValue },
		});

		const form = screen.getByRole('form');
		fireEvent.submit(form);
		// se espera que el navigate sea llamado con el valor superman
		expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
	});
});
