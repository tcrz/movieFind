import React from 'react'
import { FaEye } from "react-icons/fa";
import "./MovieCard.css"
import defaultPoster from "./defaultPoster.png"

const MovieCard = ({ id, title, year, poster, viewMovieDetails }) => {
  return (
    <article
      className="movie bg-red-400 borderr-4 border-orange-500 flex flex-col items-center relative"
      style={{ height: "280px" }}
      onClick={() => viewMovieDetails(id)}>
      <div className="inner-card-container w-full h-full bgg-red-900 flex flex-col items-center relative" style={{ width: "100%" }}>
        <div className="inner-card border border-white w-full h-full p-2 flex flex-col gap-4 bgg-black" style={{ marginBottomm: "5%", width: "100%" }}>
          <div className="inner-card-bg borderr border-black w-full flex flex-col items-center" style={{ marginToop: "25%", height: "65%", width: "100%" }}>
            <img className="" src={poster !== "N/A" ? poster : defaultPoster} alt="poster" style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="borderr border-blue-900 flex flex-col gap-3 items-center " style={{ height: "30%" }}>
            <p className="title text-xl font-medium w-full text-center" >{title}</p>
            <div className="borderr flex flex-wrap justify-around items-center gap-5" style={{ minWidth: "55%" }}>
              <p className="text-sm rounded-xl bg-gray-200 px-2" style={{ background: "#EEEEEE" }}>{year}</p>
            </div>
          </div>
        </div>
        <div className="view-btn-container p-2 w-full cursor-pointer absolute bottom-0">
          <div className="view-btn flex items-center justify-between borderr border-yellow-300 w-full">
            <h2 className="borderr border-yellow-300 w-full hover:underline text-white text-center">View Details</h2>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MovieCard