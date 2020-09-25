import { AccountCircle, Home } from "@material-ui/icons";
import {
  BottomNavigation as BottomNav,
  BottomNavigationAction,
} from "@material-ui/core";

import Link from "next/link";
import { useState } from "react";

export default function BottomNavigation(props) {
  const [value, setValue] = useState(null);
  return (
    <BottomNav
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      value={value}
      showLabels
    >
      <Link href="/">
        <BottomNavigationAction label="Home" icon={<Home />} />
      </Link>
      <Link href="/about">
        <BottomNavigationAction label="About" icon={<AccountCircle />} />
      </Link>
      <Link href="/login">
        <BottomNavigationAction label="About" icon={<AccountCircle />} />
      </Link>
    </BottomNav>
  );
}
