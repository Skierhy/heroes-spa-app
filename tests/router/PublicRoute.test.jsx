import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/context/auth/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
	test('debe de mostrar el children si no está autenticado', () => {
		const contextValue = {
			authState: {
				logged: false,
				user: null,
			},
			login: jest.fn(),
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					{/*
                        para mostrarlo usaremos h1 para ver si funciona
                        <Route path="/login" element={<LoginScreen />} />
                    */}
					<h1>Ruta pública</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Ruta pública')).toBeTruthy();
	});

	test('debe de navegar si está autenticado', () => {
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
			/* Una prueba para el componente PublicRoute. */
			<AuthContext.Provider value={contextValue}>
				{/*
                    memoryRouter sirve para que no se quede en la ruta
                    debes dos Routes para que funcione
                    si no queda en bucle
                */}
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path='/login'
							element={
								<PublicRoute>
									<h1>Ruta pública</h1>
								</PublicRoute>
							}
						/>
						<Route path='/' element={<h1>Página Marvel</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Página Marvel')).toBeTruthy();
	});
});
