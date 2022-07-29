import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../components/Layout/BaseLayout";
import { List } from "../components/list/list/List";
import { GenresList } from "../components/list/list/GenresList";
import { Genres } from "../utils/api";
const Home: PageWithLayout = () => {
  return (
    <div>
      <GenresList genre={Genres.ACTION} />
      <GenresList genre={Genres.MUSIC} />

      <List />
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
