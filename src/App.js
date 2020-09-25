import 'fontsource-roboto'
import 'fontsource-roboto-mono'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import About from 'pages/About'
import AppBar from 'components/navigation/Top'
import BottomNavigation from 'components/navigation/Bottom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from 'pages/Home'
import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'theme'

const useStyles = makeStyles(theme => ({
    hide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    show: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    }
}))


export default function App() {
    const styles = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <p className={styles.show}>Sorry, this site is only available for mobile sizes.</p>
            <div className={styles.hide}>
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
                </Router></div>
        </ThemeProvider>
    )
}