exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions 
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*" 
    // Update the page.
    createPage(page)
  }
}
