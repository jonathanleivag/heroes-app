import React from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {
    const heroes = getHeroByPublisher(publisher)
    return (
        <div>
            <ul>
                {heroes.map(({ id, superhero}) => <li key={id}>{superhero}</li>)}
            </ul>
        </div>
    )
}
