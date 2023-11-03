import React from "react";
import "./genres.scss";
import { useSelector } from "react-redux";

export const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  //   return <>Hello</>;
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div className="genre" key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};
