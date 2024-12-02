import { lookFile } from "../src/lookfile";
import * as path from "path";
describe('lookFile', () => {
    test('should resolve and return the module from a file with an alias', () => {
        // Assuming "testfile.js" is in the root directory
        const result = lookFile("@/testfile.js");
        // Verify if the returned module is as expected
        // Assuming testfile.js exports a string or an object you can check
        expect(result).toHaveProperty("message"); // Example check for exported data
        expect(result.message).toBe("I'm reachable, YAY!"); // Expected message from testfile.js
    });
    test('should resolve and return the module from a direct file path', () => {
        const testFilePath = path.resolve(process.cwd(), "testfile.js");
        const result = lookFile(testFilePath);
        // Verify if the returned module matches expected contents
        expect(result).toHaveProperty("message");
        expect(result.message).toBe("I'm reachable, YAY!");
    });
    test('should throw an error if the module does not exist', () => {
        // Non-existent file path to simulate an error
        expect(() => lookFile("@/nonExistentFile.js")).toThrow(/Module not found/);
    });
});
