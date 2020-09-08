import resolve from '@shared/util/resolve';

class DirectoryConfig {
  private constructor() {}

  static readonly ROOT = resolve();
  static readonly SHARED = resolve('shared');
  static readonly SERVER = resolve('server');
  static readonly CLIENT = resolve('client');
  static readonly STATIC = resolve('client', 'static');
  static readonly DIST = resolve('client', 'dist');

  static readonly ENV_PATH = resolve('.env');
  static readonly INDEX_PATH = resolve('client', 'static', 'index.html');
}

export default DirectoryConfig;
