// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const kidDetailTemplate = path.resolve("src/templates/kidDetailTemplate.js")
    const albumDetailTemplate = path.resolve(
      "src/templates/albumDetailTemplate.js"
    )
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
        return
      })
    )
  })
}
