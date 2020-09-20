import React from 'react'
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroByid } from '../selectors/getHeroById'


export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams()
    const hero = getHeroByid(heroeId)

    if (!hero) return <Redirect to='/' />
    const { alter_ego, characters, first_appearance, publisher, superhero } = hero

    const handlerReturn = () => {
        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }
    }

    return (
        <div className='container row mt-5 '>
            <div className='col-md-4'>
                <img
                    src={`../assets/images/${heroeId}.jpg`}
                    alt={superhero}
                    className='img-thumbnail'
                />
            </div>
            <div className='col-md-8'>
                <ListGroup>
                    <ListGroupItem >
                        <strong>Alter ego: </strong> {alter_ego}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Publisher: </strong> {publisher}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>First appearance:</strong> {first_appearance}
                    </ListGroupItem>
                </ListGroup>
                <Container className='mt-5'>
                    <h5>Characters</h5>
                    <p> {characters} </p>
                    <Button variant="outline-warning" onClick={() => handlerReturn()}>Return</Button>
                </Container>
            </div>
        </div>
    )
}
