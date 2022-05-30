import type { NextPage } from "next";
import { List } from "../components/List";
import Link from "next/link";
const Home: NextPage = () => {
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

export default Home;
