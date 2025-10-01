import fs from "fs";
import path from "path";

export function loadCatalog() {
  const filePath = path.join(process.cwd(), "data", "catalog.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
