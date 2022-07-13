import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../components/Layout/BaseLayout";
import { List } from "../components/list/list/List";
const Home: PageWithLayout = () => {
  return (
    <div>
      <List />
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
