import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticFolder = path.join(__dirname, "../static");


/**
 * Returns the contents of a file
 * @param {string} fileName relative path to static folder
 * @returns {string} Contents of static/{fileName}
 */
export function getStaticFile(fileName) {
  return fs.readFileSync(path.join(staticFolder, fileName)).toString();
}

/**
 * Interpolate string with dynamic values
 * @param {string} template String with placeholders
 * @param {Record<string, string | undefined>} values Values to interpolate
 * @returns {string} Interpolated string
 */
export function interpolate(template, values) {
  return template.replace(/{{([^}]+)}}/g, (_, key) => values[key] || "");
}