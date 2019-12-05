import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Partners from "../components/partners"

export default () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageTitle title="Contact" />
      <div>
        <h4>Want To Send The Mini Pop Kids Fan Mail?</h4>
        <p className="mb-0">Write a letter to:</p>
        <p className="mb-0">Mini Pop Kids Fan Mail</p>
        <p className="mb-0">220 Saulteaux Crescent</p>
        <p className="mb-0">Winnipeg, MB R3J 3W3</p>
        <h4 className="my-2 py-2">Mini Pop Kids Press/Media Inquiries</h4>
        <p>
          For all press-related matters please email:&nbsp;
          <a
            href="mailto:eric@thatericalper.com?cc=info@minipopkids.com&subject=Mini%20Pop%20Kids%20Press/Media%20Inquiry"
            className="pink"
          >
            Eric Alper
          </a>
        </p>
        <h4 className="my-2 py-2">
          Want To Book The Mini Pop Kids For A Live Performance?
        </h4>
        <p>
          For booking inquiries please contact:&nbsp;
          <a
            href="mailto:jhodgins@k-tel.com?cc=info@minipopkids.com&subject=Mini%20Pop%20Kids%20Booking%20Inquiry"
            className="pink"
          >
            Jamie Hodgins
          </a>
        </p>
        <h4 className="my-2 py-2">General Questions And Comments</h4>
        <p>
          We would love to hear from you! Please send any other
          questions/comments to:&nbsp;
          <a href="mailto:info@minipopkids.com" className="pink">
            info@minipopkids.com
          </a>{" "}
          or fill out the form below
        </p>
        <form action="https://formspree.io/xbneerkx" method="POST">
          <div className="flex flex-col max-w-xl">
            <input
              type="text"
              name="firstName"
              placeholder=" First Name"
              className="text-xl my-2 py-2 formField"
              required
            ></input>
            <input
              type="text"
              name="lastName"
              placeholder=" Last Name"
              className="text-xl my-2 py-2 formField"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder=" Email"
              className="text-xl my-2 py-2 formField"
              required
            />
            <textarea
              rows="5"
              name="message"
              placeholder=" Message"
              className="text-xl my-2 py-2 formField"
            ></textarea>
            <button type="submit" className="text-xl py-1 formButton">
              Send
            </button>
          </div>
        </form>
        <Partners />
      </div>
    </Layout>
  )
}
