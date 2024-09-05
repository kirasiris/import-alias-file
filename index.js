const path = require("path");
const fs = require("fs");

const alias = {
	"@": path.resolve(__dirname, "../../node_modules/import-alias-file"), // Adjust 'src' to your base directory
};

const lookFile = (modulePath) => {
	const resolvedPath = modulePath.replace(/^@/, (match) => alias[match]);

	// Check if the file exists without an extension
	if (fs.existsSync(resolvedPath)) {
		return require(resolvedPath);
	}

	// If not found, check for common extensions
	const extensions = [".js", ".json", ".ts"]; // Add more extensions as needed

	for (const ext of extensions) {
		const filePathWithExt = resolvedPath + ext;
		if (fs.existsSync(filePathWithExt)) {
			return require(filePathWithExt);
		}
	}

	throw new Error(`Module not found: ${resolvedPath}`);
};

module.exports = lookFile;
