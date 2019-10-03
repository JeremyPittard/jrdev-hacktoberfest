module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addCollection("attendees", collection => {
        return collection.getFilteredByGlob("src/collections/attendees/*.md");
    });

    return {
        dir: { input: "src", output: "dist", data: "_data", includes: "templates" },
        passthroughFileCopy: true,
        templateFormats: ["njk", "md", "css", "html", "yml"],
        htmlTemplateEngine: "njk"
    };
};
