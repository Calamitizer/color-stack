import * as path from 'path';
import appRootPath from 'app-root-path';

const root = appRootPath.toString();

const resolve = (...pathSegments: string[]) =>
  path.resolve(root, ...pathSegments);

export default resolve;
