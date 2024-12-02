"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const lookfile_1 = require("../src/lookfile");
const path = __importStar(require("path"));
describe('lookFile', () => {
    test('should resolve and return the module from a file with an alias', () => {
        // Assuming "testfile.js" is in the root directory
        const result = (0, lookfile_1.lookFile)("@/testfile.js");
        // Verify if the returned module is as expected
        // Assuming testfile.js exports a string or an object you can check
        expect(result).toHaveProperty("message"); // Example check for exported data
        expect(result.message).toBe("I'm reachable, YAY!"); // Expected message from testfile.js
    });
    test('should resolve and return the module from a direct file path', () => {
        const testFilePath = path.resolve(process.cwd(), "testfile.js");
        const result = (0, lookfile_1.lookFile)(testFilePath);
        // Verify if the returned module matches expected contents
        expect(result).toHaveProperty("message");
        expect(result.message).toBe("I'm reachable, YAY!");
    });
    test('should throw an error if the module does not exist', () => {
        // Non-existent file path to simulate an error
        expect(() => (0, lookfile_1.lookFile)("@/nonExistentFile.js")).toThrow(/Module not found/);
    });
});
