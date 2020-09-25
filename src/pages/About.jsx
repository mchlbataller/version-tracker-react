import { Button, Typography, makeStyles } from "@material-ui/core";

import Layout from "components/layout";
import React from "react";
import notfound from "components/assets/404.png";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    textAlign: "center",
    marginTop: theme.spacing(2)
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: { textAlign: "center", marginBottom: theme.spacing(5) },
  button: { padding: `0.5rem 2rem` },
}));

export const About = (props) => {
  const styles = useStyles();

  return (
    <Layout>
      <div className={styles.container}>
        <img src={notfound} alt="404" width="75%" className={styles.image} />
        <Typography variant="h5" className={styles.title}>
          Feature not available.
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle}>
          Feature is not yet available. Page will not be maintained.
        </Typography>
        <Button color="primary" variant="contained" className={styles.button}>
          Go back
        </Button>
      </div>
    </Layout>
  );
};

export default About;
