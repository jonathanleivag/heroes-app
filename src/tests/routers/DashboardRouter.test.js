import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRouter } from '../../routers/DashboardRouter';

describe('Pruebas en <DashboardRoutes />', () => {
    test('debe mostrarse correctamente', () => {
        const contextValue = { dispatch: jest.fn(), user: { logged: true, name: 'Jonathan' } }
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRouter />
                </MemoryRouter>
            </AuthContext.Provider>)
        expect(wrapper).toMatchSnapshot()
    })

})
