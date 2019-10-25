import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ album }) => {
  return (
    <>
      <SEO title={album.title} />
      <div className="flex flex-col lg:flex-row my-12">
        <div className="w-full lg:w-1/2">
          <Img fluid={album.cover.fluid} />
        </div>
        <div className="w-full lg:w-1/2 text-center flex flex-col justify-between px-2 self-center">
          <div>
            <h2>{album.title}</h2>
            <h4>Release Date: {album.releaseDate}</h4>
            <p>{album.tracks.tracks}</p>
          </div>
          <div className="flex justify-around">
            <a
              href={album.buyCd}
              className="splashButton"
              style={{ backgroundColor: "var(--main-yellow)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy CD
            </a>
            <a
              href={album.spotify}
              className="splashButton"
              style={{ backgroundColor: "var(--main-blue)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen On Spotify
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
