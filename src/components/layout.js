import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "./header"
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
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

// class LayoutBackground extends Component {
//   constructor(props) {
//     super(props)
//   }

//   static propTypes = {
//     backgroundColor: PropTypes.string,
//   }

//   static defaultProps = {
//     backgroundColor: "#fff",
//   }

//   render() {
//     return (
//       <div style={{ backgroundColor: this.props.backgroundColor }}>
//         <Layout>{this.props.children}</Layout>
//       </div>
//     )
//   }
// }

export default Layout
