import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const required = [
  "<title>Sam Monac | AI Business Operator</title>",
  "application/ld+json",
  "https://aibusinessboomer.io/",
  "Book an Automation Call",
  "sam@aibusinessboomer.com",
  "https://sam-monac-personal-brand.vercel.app/"
];

const missing = required.filter((needle) => !html.includes(needle));
if (missing.length) {
  console.error("Missing required site markers:");
  for (const item of missing) console.error("- " + item);
  process.exit(1);
}

for (const file of ["robots.txt", "sitemap.xml", "site.webmanifest", "profile.jpg"]) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error("Missing required file: " + file);
    process.exit(1);
  }
}

console.log("Site verification passed.");
