import type { NextPage } from "next";
import useHello from "../hooks/useHello";

const Home: NextPage = () => {
  const { data: helloData } = useHello();
  console.log(helloData);
  return (
    <div className="py-10">
      <div>{JSON.stringify(helloData)}</div>
      <main>Home page works!</main>
    </div>
  );
};

export default Home;
