// Import the plugin directly from the Eleventy package
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // This line tells Eleventy to copy the "css" folder
  eleventyConfig.addPassthroughCopy("css");

  // Add the official HTML Base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};