import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
// componenst
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    const { user: { logged } } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter exact path="/login" component={LoginScreen} isAuthenticated={logged} />
                    <PrivateRouter path="/" component={DashboardRouter} isAuthenticated={logged} />
                </Switch>
            </div>
        </Router>
    )
}
