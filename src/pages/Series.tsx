import { Grid, Header } from "semantic-ui-react";
import Container from "../components/container/Container";
import ListSeries from "../components/listSeries/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `${import.meta.env.VITE_APP_URL_BASE}/series?ts=1&apikey=${
      import.meta.env.VITE_APP_API_KEY_MARVEL
    }&hash=${import.meta.env.VITE_APP_HASH_ID}&orderBy=startYear&limit=20`
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">The latest Marvel series</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
