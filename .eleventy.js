module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('assets/')
	return {
		passthroughFileCopy: true,
		dir: {
			output: "dist"
		},
		pathPrefix: "/SonixDocs",
	}
}
