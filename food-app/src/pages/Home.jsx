import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Next on Your Screen" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top on the Charts" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
