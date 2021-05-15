import Head from "next/head";
import Jumbo from "../components/jumbo";
import Projects from "../components/projects";
import Team from "../components/team";
import { projectsData } from "../components/projectsData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Jumbo />
      <Projects slides={projectsData} />
      <Team />
    </div>
  );
}
