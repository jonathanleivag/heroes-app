import '@testing-library/jest-dom'
import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Test en authReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('Debe de authenticar y colocar name de usuario', () => {
        const action = { type: types.login, payload: { name: 'Jonathan' } }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({ logged: true, name: action.payload.name })
    })

    test('Debe de borrar el nombre de usuario y logged en false', () => {
        const action = { type: types.logout }
        const state = authReducer({logged: true, name: 'Jonathan' }, action)
        expect(state).toEqual({ logged: false })
    })
})
