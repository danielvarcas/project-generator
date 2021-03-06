const fs = require('fs');

const generateProject = (name, cb) => {
  let currentPath = `./${name}`;
  fs.mkdir(currentPath, (err) => {
    if (err) cb(err)
    else {
      projectName = name;
      fs.writeFile(`${currentPath}/index.js`, 'testing 123...', (err) => {
        if (err) cb(err)
        else {
          fs.writeFile(`${currentPath}/README.md`, 'this is your README file', (err) => {
            if (err) cb(err)
            else {
              fs.mkdir(`${currentPath}/spec`, (err) => {
                if (err) cb(err);
                else {
                  fs.writeFile(`${currentPath}/spec/index.spec.js`, 'tests go here', (err) => {
                    if (err) cb(err);
                    else cb(null, projectName);
                  })
                }
              })
            }  
          })
        }
      })
    }
  });
};

generateProject('my-new-project', (err, projectName) => {
  console.log(projectName);
});

module.exports = { fs };