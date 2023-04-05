import { Card, Header } from "semantic-ui-react";
import Container from "../container/Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../lastEvents/LastEvents";

export default function ListLastEvents() {
  const lastEventsFetch = useFetch(
    `${import.meta.env.VITE_APP_URL_BASE}/events?ts=1&apikey=${
      import.meta.env.VITE_APP_API_KEY_MARVEL
    }&hash=${import.meta.env.VITE_APP_HASH_ID}&orderBy=startDate&limit=5`
  );
  return (
    <div className="container-list-last-events">
      <Header size="large">Lastest Events</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
