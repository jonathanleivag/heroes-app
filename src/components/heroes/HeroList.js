import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <div>
            <div className='card-columns'>
                {heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
            </div>
        </div>
    )
}
