const fs = require('fs');

const generateProject = (name, cb) => {
  fs.mkdir(`./${name}`, (err) => {
    if (err) cb(err)
    else {
      projectName = name;
      cb(null, projectName);
    }
  });
};

generateProject('project', (err, projectName) => {
  console.log(projectName);
});

module.exports = { fs };