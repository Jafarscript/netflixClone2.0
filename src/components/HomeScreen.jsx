import React,{useState, useEffect} from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Request";

function HomeScreen() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    let scrollTimeout; // Declare scrollTimeout here

    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true);
        clearTimeout(scrollTimeout);
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 500); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);
  return (
    <div className="homeScreen">
      {/* Nav */}
      {scrolling ? null : <Nav />}
      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Treanding Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comdey Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchURL={requests.fetchDocumantariesMovies} />
    </div>
  );
}

export default HomeScreen;
