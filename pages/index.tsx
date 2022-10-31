import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";

const swrFetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home: NextPage = () => {
  const { data, error } = useSWR(`/api/stories`, swrFetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>
          Authentick | Empowering everyone to make safer, better, faster
          decisions in NFTs.
        </title>
        <meta name="description" content="NFT Verification" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        {data &&
          data.map((item: { title: string; description: string }) => {
            return (
              <div key={item.title} className="my-2 p-4 border">
                <h1 className="text-5xl">{item.title}</h1>
                <p className="text-xl">{item.description}</p>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default Home;
