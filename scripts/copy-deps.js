const { readJSONSync, writeJsonSync } = require('fs-extra');

const fg = require('fast-glob');

const copyDeps = async (ignore, srcPath) => {
  const packages = await fg([`${srcPath}/**/package.json`], {
    ignore,
  });

  let deps = {};

  for (let index = 0; index < packages.length; index++) {
    const fileName = packages[index];

    const { dependencies } = readJSONSync(fileName);
    if (!dependencies) {
      continue;
    }

    const dependenciesKeys = Object.keys(dependencies);
    for (let index = 0; index < dependenciesKeys.length; index++) {
      const element = dependencies[dependenciesKeys[index]];

      if (!deps[dependenciesKeys[index]]) {
        deps[dependenciesKeys[index]] = element;
      }
    }
  }

  const package = readJSONSync('package.json');

  package.dependencies = deps;

  writeJsonSync('package.json', package);
};

copyDeps(['**/node_modules'], 'repositories');
