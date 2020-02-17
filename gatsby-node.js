// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/vip-galleries/)) {
    page.matchPage = "/vip-galleries/*"

    createPage(page)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const kidDetailTemplate = path.resolve("src/templates/kidDetailTemplate.js")
    const albumDetailTemplate = path.resolve(
      "src/templates/albumDetailTemplate.js"
    )
    const tourDateTemplate = path.resolve("src/templates/tourDateTemplate.js")
    resolve(
      graphql(`
        {
          allContentfulKid {
            edges {
              node {
                age
                bio {
                  bio
                }
                birthday(formatString: "MMMM, DD YYYY")
                id
                instagram
                slug
                name
                headshot {
                  fluid {
                    src
                  }
                }
              }
            }
          }
          allContentfulAlbum {
            edges {
              node {
                cover {
                  fluid {
                    src
                  }
                }
                id
                releaseDate
                slug
                spotify
                title
              }
            }
          }
          allAirtable(sort: { fields: data___date }) {
            edges {
              node {
                id
                data {
                  year
                  buttonText
                  city
                  date(formatString: "DD MMM, YYYY")
                  province
                  ticketLink
                  time
                  venue
                  vipTix
                  weekday
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulKid.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: kidDetailTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulAlbum.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: albumDetailTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: `tour/${edge.node.data.slug}`,
            component: tourDateTemplate,
            context: {
              slug: edge.node.data.slug,
            },
          })
        })
        return
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
