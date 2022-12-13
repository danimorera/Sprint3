const { error } = require("console");
const {
  readdir,
  readFile,
  writeFile
} = require("fs/promises");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");

const callbackHeaven = async () => {

  let file;
  const files = await readdir(inbox, (error) => {
    if (error) return console.log("Error: Folder inaccessible");
  });

  for (let i = 0; i < files.length; i++) {
    file = files[i];
    const data = await readFile(join(inbox, file), "utf8", (error) => {
      if (error) return console.log("Error: File error");
    });

    writeFile(join(outbox, file), reverseText(data), error => {
      if (error) return console.log("Error: File could not be saved!");
    });
  }
  console.log(`${file} was successfully saved in the outbox!`);
}

callbackHeaven();