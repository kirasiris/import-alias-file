const path = require("path");
const fs = require("fs");

const alias = {
	"@": path.resolve(__dirname, process.cwd()), // Adjust 'src' to your base directory
};

const lookFile = (modulePath) => {
	const resolvedPath = modulePath.replace(/^@/, (match) => alias[match]);

	// Check if the file exists without an extension
	if (fs.existsSync(resolvedPath)) {
		// return require(resolvedPath);
		return { path: filePathWithExt, module: require(filePathWithExt) }; // Return both path and module
	}

	// If not found, check for common extensions
	const extensions = [".js", ".json", ".ts"]; // Add more extensions as needed

	for (const ext of extensions) {
		const filePathWithExt = resolvedPath + ext;
		if (fs.existsSync(filePathWithExt)) {
			// return require(filePathWithExt);
			return { path: filePathWithExt, module: require(filePathWithExt) }; // Return both path and module
		}
	}

	throw new Error(`Module not found: ${resolvedPath}`);
};

module.exports = lookFile;
