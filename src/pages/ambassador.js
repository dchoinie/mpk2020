import React from "react"
import Layout from "../components/layout"

const Ambassador = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <iframe
            title="Ambassador"
            height="4500"
            width="100%"
            frameborder="0"
            style={{ width: "100%", overflow: "hidden", border: "none" }}
            src="https://minipopkidsambassadorprogram.castingcrane.com/embed"
            allow="microphone; camera"
          >
            <a href="https://minipopkidsambassadorprogram.castingcrane.com/">
              Fill out the Mini Pop Kids | Ambassador Program form
            </a>
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Ambassador
