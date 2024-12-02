"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookFile = void 0;
const path = require("path");
const fs = require("fs");
const alias = {
    "@": path.resolve(process.cwd()),
};
const lookFile = (modulePath) => {
    let resolvedPath = modulePath.replace(/^@/, (match) => alias[match]);
    // Ensure path is absolute
    if (!path.isAbsolute(resolvedPath)) {
        resolvedPath = path.resolve(process.cwd(), resolvedPath);
    }
    // Check file existence and load it
    if (fs.existsSync(resolvedPath)) {
        logFilePath(resolvedPath);
        return require(resolvedPath);
        // return resolvedPath;
    }
    // Check for common extensions
    const extensions = [".js", ".json", ".ts"];
    for (const ext of extensions) {
        const filePathWithExt = resolvedPath + ext;
        if (fs.existsSync(filePathWithExt)) {
            logFilePath(filePathWithExt);
            return require(filePathWithExt);
            // return filePathWithExt;
        }
    }
    throw new Error(`Module not found: ${resolvedPath}`);
};
exports.lookFile = lookFile;
const logFilePath = (filePath) => {
    console.log(`File opened: ${filePath}`);
};