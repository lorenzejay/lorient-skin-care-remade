const data = require("./src/data/services.json")
const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

exports.createPages = async ({ actions, graphql }) => {
  const services = data.forEach(service => {
    actions.createPage({
      path: `${service.slug}`,
      component: require.resolve("./src/templates/service.js"),
      context: {
        id: service.id,
        title: service.title,
        description: service.shortDescription,
        benefits: service.benefits,
        blogSlug: service.blogSlug,
      },
    })
  })

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const blogs = result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  return Promise.all([services, blogs])
}
