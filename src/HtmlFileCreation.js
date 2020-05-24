const fs = require('fs');
const fileName = 'index.html';

let prefix = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./assets/css/styles.css">
  <title>TEAM</title>
</head>
<body>
    <header>
      <h2>Team</h2>
    </header>
`;
let main = `
  <main class="main">
      <div class="manager">
      </div>
  </main>
`;
let bottom = `
  <footer>
    Dilbert &copy 2020, Andrews McMeel Syndication; 
  </footer>
</body>
</html>
`;

function writeToFile(team) {
    fs.writeFile(fileName, prefix + bottom, err => {
      if (err) throw err;
  
      console.log('Done');
    });
}

module.exports = htmlFileCreation;
