(() => {
  'use strict';
  const tsConfigPaths = require('tsconfig-paths');

  const env = process.env.NODE_ENV;
  const configPath =
    env === 'production'
      ? './tsconfig-prod.json'
      : env === 'development'
      ? './tsconfig.json'
      : (() => {
          throw new Error(`Invalid NODE_ENV: \`${env}\``);
        })();

  const {
    resultType,
    absoluteBaseUrl: baseUrl,
    paths,
  } = tsConfigPaths.loadConfig(configPath);

  if (resultType === 'failed') {
    throw new Error(loadResult.message);
  }

  tsConfigPaths.register({
    baseUrl,
    paths,
  });
})();
