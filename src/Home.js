import React from "react";
import Hero from "./Components/Hero/Hero";
import Feature from "./Components/Features/Feature";
import { Content } from "./Components/Content/Content";
import { heroOne, heroTwo, heroThree } from './Data/Herodata';
import Carousel from "./Components/Carousel/Carousel";


function Home(){
    return(
      <>
      <Hero/>
      <Feature/>
      <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
      <Carousel/>
      </>
    )
}
export default Home