import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/context/auth/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
	test('debe de mostrar el login si no está autenticado', () => {
		const contextValue = {
			authState: {
				logged: false,
			},
			login: jest.fn(),
		};
		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// debe que ser getAllByText por que tengo dos login
		expect(screen.getAllByText('Login').length).toBe(2);
	});

	test('debe de mostrar el componente de Marvel si está autenticado', () => {
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
			<MemoryRouter initialEntries={['/login']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		// el toBeGreaterThanOrEqual es para que sea mayor o igual a 1
		expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
	});
});
