import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// components
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRouter = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container mt-5'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:heroeId' component={HeroScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </Fragment>
    )
}
