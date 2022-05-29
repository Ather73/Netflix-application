import React from "react";
import BigCard from "./sharedComponents/BigCard";
import Row from "./sharedComponents/Row";
import requests from "./api/apiCongig";
import "./App.css";
import Banner from "./sharedComponents/Banner";
import Navbar from "./sharedComponents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        url={requests.fetchNetflixoriginals}
        bigCard
      />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="ActionMovies" url={requests.fetchActionMovies} />
      <Row title="ComedyMovies" url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" url={requests.fetchorrorMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentries" url={requests.fetchdocumentaries} />
    </>
  );
}
export default App;
