import '@testing-library/jest-dom'
import React from 'react';
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de realizar el dispatch y la navegación', () => {
       const handlerClick = wrapper.find('button').prop('onClick')
       handlerClick()
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Jonathan' }
        })

        localStorage.setItem('lastPath','/marvel')
        expect(history.replace).toHaveBeenCalledWith('/')
        handlerClick()
        expect(history.replace).toHaveBeenCalledWith('/marvel')

    })

})
