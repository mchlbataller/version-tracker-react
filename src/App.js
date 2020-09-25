import 'fontsource-roboto'
import 'fontsource-roboto-mono'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import BottomNavigation from 'components/navigation/Bottom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from 'pages/Home'
import React from 'react'

export default function App() {
    return(
        <>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
                <BottomNavigation />
            </Router>
        </>
    )
}