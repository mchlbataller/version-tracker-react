import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: "2rem 1.5rem",
  },
});

const Layout = ({children}) => {
    const style = useStyles()
    return (
        <div className={style.root}>
            {children}
        </div>
    )
}

export default Layout