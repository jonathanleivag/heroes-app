import React, { useMemo, Fragment } from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <Fragment>
            <div className='card-columns animate__animated animate__fadeIn'>
                {heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
            </div>
        </Fragment>
    )
}
