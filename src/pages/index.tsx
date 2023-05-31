import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drivesafe Form</title>
        <meta name="description" content="VAS-F Form to log user fatigue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-gradient-to-b from-[#411c72] to-[#070b65]">
        <div className="container flex gap-12 px-4 py-16 ">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Visual Analogue Scale for Fatigue
            <br />
            <span className="text-[hsl(280,100%,70%)]">VAS-F</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
