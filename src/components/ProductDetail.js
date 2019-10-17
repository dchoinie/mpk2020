import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ShopifyBuy from "@shopify/buy-button-js"
import { useLayoutEffect } from "react"
import { Base64 } from "js-base64"

const ProductDetail = ({ product }) => {
  // useLayoutEffect(() => {
  //   const client = ShopifyBuy.buildClient({
  //     domain: "minipopkids.myshopify.com",
  //     storefrontAccessToken: "81eafdbcaa5e3d68dc7a61dbec7278bc",
  //   })
  //   const ui = ShopifyBuy.UI.init(client)
  //   const decodded = Base64.decode(product.shopifyId)
  //   const actualId = decodded.replace("gid://shopify/Product/", "")
  //   ui.createComponent("product", {
  //     id: actualId,
  //     node: document.getElementById("shopifyButton"),
  //   })
  // }, [])

  return (
    <Layout>
      {/* <div className="flex justify-around" style={{ border: "1px solid red" }}>
        <div className="w-50" style={{ border: "1px solid blue" }}>
          <h2 className="text-center">{product.title}</h2>
          <Img fluid={product.images[0].localFile.childImageSharp.fluid} />
        </div>
        <div className="w-50 text-center">
          <h2>${product.variants[0].price}</h2>
          <p>{product.description}</p>
        </div>
      </div> */}
      {/* <div className="mx-auto my-12" id="shopifyButton"></div> */}
    </Layout>
  )
}

export default ProductDetail
