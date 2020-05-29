import React, { Component } from "react"
import { Helmet } from "react-helmet"
import NewHeader from "./newHeader"
import NewHeaderMobile from "./newHeaderMobile"
import Footer from "./footer"

const Layout = ({ children, backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className="container mx-auto">
        <NewHeader />
        <NewHeaderMobile />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
