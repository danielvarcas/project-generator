const fs = require('fs');

const generateProject = (name, cb) => {
  let currentPath = `./${name}`;
  fs.mkdir(currentPath, (err) => {
    if (err) cb(err)
    else {
      projectName = name;
      currentPath = currentPath + `/index.js`
      fs.writeFile(currentPath, 'testing 123...', (err) => {
        if (err) cb(err)
        else cb(null, projectName);
        })
    }
  });
};

generateProject('my-new-project', (err, projectName) => {
  console.log(projectName);
});

module.exports = { fs };