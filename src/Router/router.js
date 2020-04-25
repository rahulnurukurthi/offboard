import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import offboardDashboard from "../Home/offboardDashboard";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={offboardDashboard} />
            </Switch>
        </BrowserRouter>
    );
}