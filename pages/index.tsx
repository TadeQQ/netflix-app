import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../components/Layout/BaseLayout";
import { List } from "../components/list/list/List";
import { ListByGenres } from "../components/list/list/ListByGenres";
import { ListByPopular } from "../components/list/Popular/ListByPopular";
import { Genres } from "../utils/api";
const Home: PageWithLayout = () => {
  return (
    <div>
      <div>
        <ListByPopular genre={Genres.POPULAR} />
      </div>

      <ListByGenres genre={Genres.ACTION} />
      <ListByGenres genre={Genres.ADVENTURE} />
      <ListByGenres genre={Genres.ANIMATION} />
      <ListByGenres genre={Genres.BIOGRAPHY} />
      <ListByGenres genre={Genres.COMEDY} />
      <ListByGenres genre={Genres.CRIME} />
      <ListByGenres genre={Genres.DRAMA} />
      <ListByGenres genre={Genres.FAMILY} />
      <ListByGenres genre={Genres.FANTASY} />
      <ListByGenres genre={Genres.FILMNOIR} />
      <ListByGenres genre={Genres.HISTORY} />
      <ListByGenres genre={Genres.HORROR} />
      <ListByGenres genre={Genres.MUSIC} />
      <ListByGenres genre={Genres.MUSICAL} />
      <ListByGenres genre={Genres.MYSTERY} />
      <ListByGenres genre={Genres.ROMANCE} />
      <ListByGenres genre={Genres.SCIFI} />
      <ListByGenres genre={Genres.SPORT} />
      <ListByGenres genre={Genres.THRILLER} />
      <ListByGenres genre={Genres.WAR} />
      <ListByGenres genre={Genres.WESTERN} />

      <List />
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
