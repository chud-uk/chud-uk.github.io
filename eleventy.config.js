import { feedPlugin } from "@11ty/eleventy-plugin-rss"

export default function (eleventyConfig) {
  eleventyConfig.addFilter('toISOdate', function(date) {
    return date instanceof Date ? date.toISOString().slice(0, 10) : date
  })

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
        name: "post",
        limit: 0,
    },
    metadata: {
        language: "en",
        title: "chud.uk",
        subtitle: "Someone's blog.",
        base: "https://chud.uk/",
        author: {
            name: "chud-uk",
        }
    }
  })

  eleventyConfig.addPassthroughCopy({ "./_includes/public/": "/" })
}

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",

  dir: {
    input: "content",
    includes: "../_includes",
    output: "_site"
  },
}
