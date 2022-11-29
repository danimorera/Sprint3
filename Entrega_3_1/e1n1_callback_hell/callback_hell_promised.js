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


//up top this point nothing has been changed.


// Read and reverse contents of text files in a directory

/* readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
}); */

readdir(inbox)
  .then(files => {
    files.forEach(file => {
      readFile(join(inbox, file), "utf8")
        .then(data => {
          writeFile(join(outbox, file), reverseText(data))
        })
        .catch(() => {
          console.log("Error: File error")
        })
        .then(console.log(`${file} was successfully saved in the outbox!`))
        .catch(() => {
          console.log("Error: File could not be saved!")
        })
    })
  })
  .catch(error => {
    console.log("Error: Folder inaccessible")
  });