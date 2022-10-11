/* Importación de los módulos necesarios para la prueba. */
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/context/auth/AuthContext';
import { NavBar } from '../../../src/util/components/NavBar';

//
const mockedUseNavigate = jest.fn();

// primero la ubicación de useNavigate
// segundo argumento es el valor que queremos retornar
// ...jest.requireActual('react-router-dom') es para que no se pierda la funcionalidad original
// useNavigate: () => mockedUseNavigate es para que use el mock
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	// esto es para sobre escribir la funcionalidad original
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
	// creamos un objeto de contexto
	const contextValue = {
		authState: {
			logged: true,
			user: {
				name: 'Skierhy',
				id: '123',
			},
		},
		/* Creación de una función simulada. */
		logout: jest.fn(),
	};

	/* Limpiar todos los simulacros antes de cada prueba. */
	beforeEach(() => jest.clearAllMocks());

	test('debe de mostrar el nombre del usuario', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<NavBar />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// esperamos que el nombre del usuario esté en el documento
		expect(screen.getByText('Skierhy')).toBeTruthy();
	});

	test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<NavBar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const logoutBtn = screen.getAllByRole('button');
		fireEvent.click(logoutBtn[1]);

		/* Comprobando si se ha llamado a la función `logout`. */
		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {
			replace: true,
		});
	});
});
