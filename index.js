const fs = require('fs');

const generateProject = (name, cb) => {
  fs.mkdir(`./${name}`, (err) => {
    if (err) cb(err)
    else {
      projectName = name;
      fs.writeFile(`./${name}/index.js`, 'testing 123...', (err) => {
        if (err) cb(err)
        else cb(null, projectName);
      })
    }
  });
};

generateProject('project2', (err, projectName) => {
  console.log(projectName);
});

module.exports = { fs };