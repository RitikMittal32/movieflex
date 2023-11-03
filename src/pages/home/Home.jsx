import React from "react";
import { HeroBanner } from "./HeroBanner";
import { Trending } from "./trending/Trending";
import { Popular } from "./popular/Popular";
import { TopRated } from "./topRated/TopRated";

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
