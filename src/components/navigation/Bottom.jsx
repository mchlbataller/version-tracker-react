import { AccountCircle, Home } from "@material-ui/icons";
import {
  BottomNavigation as BottomNav,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import {Link, useLocation} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
  },
});

export default function BottomNavigation(props) {
  const [value, setValue] = useState();
  const location = useLocation()

  useEffect(() => {
    setValue(location.pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const styles = useStyles();

  return (
    <BottomNav
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      value={value}
      className={styles.root}
    >
        <BottomNavigationAction label="Home" icon={<Home />} value="/" component={Link} to="/" />
        <BottomNavigationAction
          label="About"
          icon={<AccountCircle />}
          value="/about"
          component={Link}
          to="/about"
        />
        <BottomNavigationAction
          label="About"
          icon={<AccountCircle />}
          value="/account"
          component={Link}
          to="/account"
        />
    </BottomNav>
  );
}
