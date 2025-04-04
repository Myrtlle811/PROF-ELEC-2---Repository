// Files System allows us to open/write/update files

const fs = require("fs");

// Read files
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`File content: ${data}`);
});

// Write files
const content = "This is a newer content!";

fs.writeFile("output.txt", content, "utf-8", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Data Written Successfully!");
});

// Check if Files/Directories exist
const filePath = "example.txt";

if (fs.existsSync(filePath)) {
  console.log("File is existing!");
} else {
  console.log("File is not existing!");
}

// // Create Directories (folders)
// fs.mkdir("newDirectory2", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("Directory Created Successfully!");
// });

// List files in a directory
const directoryPath = "newDirectory";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Files in the directory: ", files);
});

// Remove file
fs.unlink("output.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File Deleted Successfully!");
});

// // Remove directories (empty)
// fs.rmdir("newDirectory2", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Folder removed!");
// });

// Remove directories and contained files
fs.rmSync("newDirectory", { recursive: true, force: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Folder and files are removed!");
});
