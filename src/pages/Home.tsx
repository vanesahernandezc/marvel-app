import BestCharacters from "../components/bestCharacters/BestCharacters";
import Insider from "../components/insider/Insider";
import ListLastEvents from "../components/listLastEvents/ListLastEvents";

export default function Home() {
  return (
    <div>
      <BestCharacters />
      <ListLastEvents />
      <Insider />
    </div>
  );
}
