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
            <h2 className="my-4 lg:my-0">{album.title}</h2>
            <h4>Release Date: {album.releaseDate}</h4>
            <p>{album.tracks.tracks}</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <a
              href={album.buyCd}
              className="button-yellow w-full mb-1 lg:mb-0 lg:w-1/2 text-lg lg:mr-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy CD
            </a>
            <a
              href={album.spotify}
              className="button-blue w-full mt-1 lg:mt-0 lg:w-1/2 text-lg lg:ml-2"
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
