import { types } from '../../../../src/context/auth/types/types';

describe('Pruebas en "Types.js"', () => {
	test('debe de regresar estos types', () => {
		// comprobamos que el estado sea el esperado
		// usando toEqual para objetos y arrays y toBe para primitivos
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',
		});
	});
});
