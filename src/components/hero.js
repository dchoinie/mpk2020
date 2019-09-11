import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Hero from "../images/live_shot.png"

export default () => {
  return (
    <div
      id="heroDiv"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5), rgba(0,0,0,0.8)) ,url(${Hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        marginTop: "-107.6px",
      }}
    >
      <div
        className="flex-col text-center w-full justify-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        <h1 className="text-5xl capitalize">
          Official site of the Mini Pop Kids
        </h1>
        <h2
          className="text-4xl"
          style={{
            color: "var(--main-pink)",
            textShadow: "1px 1px 10px var(--main-black)",
          }}
        >
          Canada's #1 Music Brand For Kids
        </h2>
      </div>
    </div>
  )
}

// const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "live_shot.png" }) {
//         childImageSharp {
//           fluid(quality: 100) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <div style={{ marginTop: "-108px" }}>
//       <BackgroundImage
//         fluid={data.file.childImageSharp.fluid}
//         className="h-screen"
//       >
//         <div
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(255, 255, 255, 0.4), rgba(0,0,0,1))",
//           }}
//         ></div>
//       </BackgroundImage>
//       <div
//         className="flex w-full justify-center"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           color: "#fff",
//         }}
//       >
//         <h2 className="text-5xl">Canada's #1 Music Brand For Kids</h2>
//       </div>
//     </div>
//   )
