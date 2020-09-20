import React, { useMemo } from 'react'
import queryString from 'query-string'
import { Row, Col, Button, Form, Alert } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { useLocation } from 'react-router-dom'
import { getHeroByName } from '../selectors/getHeroByName'

export const SearchScreen = ({ history: { push } }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [values, handlerInputChange] = useForm({ searchText: q })
    const { searchText } = values
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])
    const handlerSearch = event => {
        event.preventDefault()
        push(`?q=${searchText}`)
    }
    return (
        <div>
            <Row>
                <Col md={5}>
                    <h1>Search Screen</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handlerSearch}>
                        <Form.Group controlId='inpControl'>
                            <Form.Label>Search:</Form.Label>
                            <Form.Control type='text' name='searchText' value={searchText} onChange={handlerInputChange} placeholder='Search heroes' />
                        </Form.Group>
                        <Button variant="outline-info" size='lg' block type="submit">
                            Search
                        </Button>
                    </Form>
                </Col>
                <Col md={7}>
                    <h2 style={{ fontSize: '2.5rem' }}>Result</h2>
                    <hr />
                    {q === '' && <Alert className='mt-5' variant='info'>Search a hero</Alert>}
                    {(q !== '' && heroesFiltered.length === 0) && <Alert className='mt-5' variant='danger'>There is no a hero with {q} </Alert>}
                    {heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)}
                </Col>
            </Row>

        </div>
    )
}