import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'
import React from 'react';

describe('debe de mostrar login si no está autenticado', () => {


    test('debe de mostrar login si no está autenticado ', () => {
        const contextValue = { dispatch: jest.fn(), user: { logged: false } }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el componente marvel si está autenticado', () => {
        const contextValue = { dispatch: jest.fn(), user: { logged: true, name: 'Jonathan' } }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>)
        expect(wrapper.find('h1').text().toLowerCase().includes('marvel')).toBe(true)
        expect(wrapper.find('span').text().trim()).toBe(contextValue.user.name)
        expect(wrapper).toMatchSnapshot()
    })


})
