import { Typography as Text, makeStyles } from "@material-ui/core";

import Layout from 'components/layout'
import React from "react";
import data from "components/assets/data";
import github from "components/assets/github.png";

const useStyles = makeStyles({
  subtitle: {
    display: "flex",
    marginTop: "0.2rem",
    marginBottom: "2rem",
    "& img": {
      margin: "0 0.25rem",
    },
    "& h6": { color: "#737373" },
  },
  changesContainer: {
    margin: "1rem 0rem",
  },
  changes: { margin: 0, fontFamily: "Roboto Mono" },
})

export default function Home(props) {
  const styles = useStyles();

  return (
    <Layout>
      <Text variant="h5">Pantasan Web App</Text>

      <div className={styles.subtitle}>
        <img src={github} alt="g" width="20px" />
        <Text variant="subtitle2">The-Pantasan-Project/pantasan-web-app</Text>
      </div>

      <section id="changelogs">
        {data.reverse().map((e) => (
          <>
            <div className={styles.changesContainer}>
              <Text variant="h6">{e.date}</Text>
              {e.changes.map((change) => (
                <p className={styles.changes}> - {change}</p>
              ))}
            </div>
            <hr />
          </>
        ))}
        <p className="text-center">You've reached the end of the page.</p>
      </section>
    </Layout>
  );
}
