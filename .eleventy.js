// This file now uses the recommended async/import syntax
module.exports = async function(eleventyConfig) {
  // Dynamically import the Eleventy HTML Base Plugin
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

  // This line tells Eleventy to copy the "css" folder
  eleventyConfig.addPassthroughCopy("css");

  // Add the official HTML Base plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    // THIS IS THE FIX: Add your repository name here
    pathPrefix: "/flow-canvas-jam/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};