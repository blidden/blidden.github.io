# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# activate :autoprefixer do |prefix|
#   prefix.browsers = "last 2 versions"
# end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# livereload
activate :livereload

# pretty URLs
activate :directory_indexes

# relativ links
set :relative_links, true

# set default directory for images
set :images_dir, 'images'

# blog
activate :blog do |blog|
  # change default path fo blog articles to folder called 'blog'
  blog.prefix = "blog/posts"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  blog.permalink = "{title}.html"
  Time.zone = "Sydney"
end

# With alternative layout
page 'blog/index.html', layout: 'layouts/blog'
page 'index.html', layout: 'layouts/layout'
page 'blog/posts/*', layout: 'layouts/blogPost'
page 'portfolio/*', layout: 'layouts/portfolio'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  # activate :minify_javascript
end
