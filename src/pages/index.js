import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";

import HeaderNav from "../components/headerNav/HeaderNav";
import MainSubject from "../components/mainSubject/MainSubject";
import Achieved from "../components/Achieved/Achieved";
import Teachers from "../components/teachers/Teachers";
import BuyTicket from "../components/buyTicket/BuyTicket";
import axios from "axios";
import Consulting from "../components/consulting/Consulting";
import Footer from "../components/footer/Footer";
import Conductor from "../components/Conductor/Conductor";

const Home = () => {
  const [scrollY, setScrollY] = useState(false);
  const [activeSection, setActiveSection] = useState();

  const ref = useRef([]);

  const scrollToRef = (myRef) => {
    let scroll = ref.current[[myRef]];
    if (scroll) {
      scroll.scrollIntoView();
    }
    console.log(myRef);
    setActiveSection(myRef);
  };

  const executeScroll = (ref) => {
    scrollToRef(ref);
  };

  useEffect(() => {
    const handleScroll = () => {
      window?.scrollY > 50 ? setScrollY(true) : setScrollY(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return [
    <HeaderNav
      scrollY={scrollY}
      executeScroll={executeScroll}
      activeSection={activeSection}
    />,
    <Header executeScroll={executeScroll} />,
    <MainSubject
      executeScroll={executeScroll}
      ref={(el) => (ref.current[0] = el)}
    />,
    <Achieved
      executeScroll={executeScroll}
      ref={(el) => (ref.current[1] = el)}
    />,
    <Teachers ref={(el) => (ref.current[2] = el)} />,
    <Conductor
      executeScroll={executeScroll}
      ref={(el) => (ref.current[3] = el)}
    />,
    <BuyTicket ref={(el) => (ref.current[4] = el)} />,
    <Consulting ref={(el) => (ref.current[5] = el)} />,
    <Footer />,
  ];
};

export default Home;
