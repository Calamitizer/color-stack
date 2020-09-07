import dotenv from 'dotenv';
import DirectoryConfig from '@shared/config/directory.config';

const loadEnv = () => {
  const { error, parsed } = dotenv.config({
    path: DirectoryConfig.ENV_PATH,
  });

  if (error) {
    throw error;
  }

  return parsed!;
};

export default loadEnv();
