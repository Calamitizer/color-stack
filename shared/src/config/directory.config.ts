import resolve from '@shared/util/resolve';

class DirectoryConfig {
  private constructor() {}

  static readonly ROOT = resolve();
  static readonly ENV_PATH = resolve('.env');
}

export default DirectoryConfig;
