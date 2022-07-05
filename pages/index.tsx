import { PageWithLayout } from "../types/PageWithLayout";
import { getBaseLayout } from "../components/Layout/BaseLayout";
import { List } from "../components/list/list/List";
import Link from "next/link";
const Home: PageWithLayout = () => {
  return (
    <div>
      <div>
        <Link href="/search">
          <a>Search film</a>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <List />
      </div>
    </div>
  );
};

Home.getLayout = getBaseLayout;

export default Home;
