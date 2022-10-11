import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/context/auth/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el <PrivateRoute />', () => {
	test('debe de mostrar el children si está autenticado', () => {
		// sirve para simular el localStorage
		// localStorage.setItem('lastPath', '/dc');
		// aquí se debe que sobrescribir el prototype de localStorage
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			authState: {
				logged: true,
				user: {
					name: 'Skierhy',
					id: '123',
				},
			},
			login: jest.fn(),
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/search?q=batman']}>
					<PrivateRoute>
						<h1>Ruta privada</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Ruta privada')).toBeTruthy();
		// lo que se espera que se haya llamado
		// el localStorage con el argumento 'lastPath' y el valor '/search?q=batman'
		// se debe que tener dos argumentos
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'lastPath',
			'/search?q=batman'
		);
	});
});
