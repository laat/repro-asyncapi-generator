const path = require("path");
const Generator = require("@asyncapi/generator");

async function main() {
  const generator = new Generator(
    "@asyncapi/html-template",
    path.join(__dirname, "src"),
    { forceWrite: true }
  );
  await generator.generateFromFile(path.join(__dirname, "src/simple.yaml"));
  console.log("success!");
}

main().catch((e) => {
  console.log("failed");
  console.error(e);
  process.exit(1);
});
