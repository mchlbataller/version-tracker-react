import 'fontsource-roboto'
import 'fontsource-roboto-mono'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import About from 'pages/About'
import AppBar from 'components/navigation/Top'
import BottomNavigation from 'components/navigation/Bottom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from 'pages/Home'
import React from 'react'
import {ThemeProvider} from '@material-ui/core'
import {theme} from 'theme'

export default function App() {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <AppBar />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route component={About} />
                </Switch>
                <BottomNavigation />
            </Router>
        </ThemeProvider>
    )
}