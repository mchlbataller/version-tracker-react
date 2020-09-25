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
          Almost there!
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle}>
          We are currently working on this page. Please try again later.
        </Typography>
        <Button color="primary" variant="contained" className={styles.button}>
          Go back
        </Button>
      </div>
    </Layout>
  );
};

export default About;
