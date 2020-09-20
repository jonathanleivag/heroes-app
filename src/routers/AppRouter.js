import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
// componenst
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {

    const { user: { logged } } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <PrivateRouter path="/" component={DashboardRouter} isAuthenticated={logged} />
                </Switch>
            </div>
        </Router>
    )
}
