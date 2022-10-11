// importaciones
import { authReducer } from '../../../src/context/auth/authReducer';
import { types } from '../../../src/context/auth/types/types';

describe('Pruebas en authReducer', () => {
	test('debe de retornar el estado por defecto', () => {
		// inicializamos el estado
		const state = authReducer({ logged: false }, {});
		// comprobamos que el estado sea el esperado
		// toEqual es para objetos y arrays y toBe para primitivos
		expect(state).toEqual({ logged: false });
	});

	test('debe de (login) llamar el login autenticar y establecer el user', () => {
		// creamos la acción
		const action = {
			type: types.login,
			payload: {
				name: 'skierhy',
				id: '123',
			},
		};
		// inicializamos el estado mandado el initialState y la acción
		const state = authReducer({ logged: false }, action);
		// comprobamos que el estado sea el esperado
		expect(state).toEqual({
			logged: true,
			user: action.payload,
		});
	});

	test('debe de (logout) borrar el name del usuario y logged en false ', () => {
		// creamos el estado inicial
		const state = {
			logged: true,
			user: { id: '123', name: 'skierhy' },
		};
		// creamos la acción
		const action = {
			type: types.logout,
		};
		// inicializamos el estado mandado el initialState y la acción
		const newState = authReducer(state, action);
		// comprobamos que el estado sea el esperado
		expect(newState).toEqual({ logged: false });
	});
});
