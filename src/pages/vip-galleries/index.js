import React from "react"
import Layout from "../../components/layout"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import { FaSignOutAlt } from "react-icons/fa"
import Banner from "../../components/VipGalleryImage"
import Galleries from "../../components/vipGalleryListing"

const Home = ({ user }) => null
const London = ({ user }) => null

const VipGalleries = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Layout backgroundColor="#000">
        <Banner />
        <div className="flex justify-end mb-6">
          <div className="flex flex-col ml-2">
            <p className="mb-0 text-white">
              Logged in as:{" "}
              <span className="blue fredoka">{user.nickname}</span>
            </p>
            <button
              className="pink self-end font-bold flex"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Log Out <FaSignOutAlt className="self-center ml-2" />
            </button>
          </div>
        </div>
        <Galleries />
      </Layout>
      <Router>
        <Home path="/vip-galleries" user={user} />
        <London path="/vip-galleries/london" user={user} />
      </Router>
    </>
  )
}

export default VipGalleries
