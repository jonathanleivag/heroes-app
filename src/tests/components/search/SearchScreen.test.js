import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom'
import { SearchScreen } from '../../../components/search/SearchScreen';
import { act } from '@testing-library/react';

describe('Pruebas en <SearchScreen />', () => {
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route exact path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Spider%20Man']}>
                <Route exact path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('Spider Man')
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar un error si no se encuentra el Hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Spider%20Mannn']}>
                <Route exact path='/search' component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper.find('input').prop('value')).toBe('Spider Mannn')
        expect(wrapper.find('Alert').text().trim()).toBe('There is no a hero with Spider Mannn')
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de llamar el push del history', () => {
        const history = {
            push: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Spider%20Man']}>
                <Route exact path='/search' component={() => <SearchScreen history={history} />} />
            </MemoryRouter>
        )
        act(()=> wrapper.find('input').prop('onChange')({ target: { name: 'searchText', value: 'Spider Man' } }))    
        wrapper.find('form').prop('onSubmit')({ preventDefault() { } })
        expect(history.push).toHaveBeenCalledWith(`?q=Spider Man`)
    })

})
