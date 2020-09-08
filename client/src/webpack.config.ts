import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import DirectoryConfig from '@shared/config/directory.config';
import resolve from '@shared/util/resolve';

const wpConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: [resolve(DirectoryConfig.CLIENT, 'src', 'index.tsx')],

  watch: false, // can be overridden by CLI flag
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    filename: 'cs.min.js',
    publicPath: '',
    path: resolve(DirectoryConfig.CLIENT, 'dist'),
  },

  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve(DirectoryConfig.CLIENT, 'tsconfig.json'),
      }),
    ],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [
      resolve(DirectoryConfig.CLIENT, 'node_modules'),
      resolve(DirectoryConfig.ROOT, 'node_modules'),
      resolve(DirectoryConfig.CLIENT, 'src'),
    ],
    alias: {
      '@client': resolve(DirectoryConfig.CLIENT, 'src'),
      '@shared': resolve(DirectoryConfig.SHARED, 'src'),
      // '@scss': DirectoryConfig.CLIENT_SCSS,
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: resolve(DirectoryConfig.CLIENT, 'tsconfig.json'),
          useCache: true,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      // {
      //   test: /\.s?css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
    ],
  },

  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: `${MtmConfig.APP_NAME}.css`,
    // }),
  ],
};

export default wpConfig;
