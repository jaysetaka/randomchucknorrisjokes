import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_JOKES } from "../../hooks/useGetJokes";
// STYLES IMPORTS
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CssBaseline,
  Container,
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  jokes: {
    fontSize: 25,
    textAlign: "center",
    margin: 50,
  },
  jokesError: {
    fontSize: 50,
    textAlign: "center",
    margin: 50,
    color: "red",
  },
  textField: {
    width: "25ch",
  },
  jokeBtn: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
});

const Home: React.FC = () => {
  const [jokeInput, setJokeInput] = useState("");
  const [getJoke, { loading, data, error }] = useLazyQuery(GET_JOKES, {
    fetchPolicy: "no-cache",
  });
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container>
        <Typography
          variant="h2"
          align="center"
          style={{ margin: 20, paddingTop: 50 }}
        >
          Chuck Norris Random Joke Generator
        </Typography>

        <form>
          <TextField
            id="standard-full-width"
            label=""
            style={{ margin: 8 }}
            placeholder="Please Type Joke Category eg. career"
            helperText="Jokes Categories: animal,career,celebrity,dev,explicit,fashion,food,history,money,movie,music,political,religion,science,sport,travel"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setJokeInput(e.target.value);
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />

          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.jokeBtn}
            onClick={() => getJoke({ variables: { category: jokeInput } })}
          >
            Generate Joke
          </Button>
        </form>

        <Card>
          <CardContent>
            {error && (
              <Typography className={classes.jokesError}>
                Category Not Found
              </Typography>
            )}
            {loading && (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <CircularProgress />
              </div>
            )}
            {data && (
              <Typography className={classes.jokes}>
                {data.chuckNorrisRandomJokes.value}
              </Typography>
            )}
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
