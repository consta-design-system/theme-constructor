const path = require('path');
const webpack = require('webpack');

const remark = require('remark-gfm');

const productionMode = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';

const repos = [
  'analytic-ui',
  'uikit',
  'charts',
  'header',
  'stats',
  'react-big-calendar-adapter',
  'gantt-task-react-adapter',
  'rc-tree-adapter',
  'rc-table-adapter',
  'ag-grid-adapter',
  'widgets',
  'amcharts-map-examples',
  'gpn-responses',
  'icons',
  'react-slick-adapter',
];

const repositoriesTsRules = (repos) => {
  return repos.map((name) => ({
    test: /\.tsx?$/,
    use: require.resolve('babel-loader'),
    include: [path.resolve(__dirname, 'repositories', name)],
    resolve: {
      alias: {
        '##': path.resolve(__dirname, 'repositories', name, 'src'),
      },
    },
  }));
};

const repositoriesMdRules = (repos) => {
  return repos.map((name) => ({
    test: /\.mdx?$/,
    use: [
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [remark],
        },
      },
    ],
    include: [path.resolve(__dirname, 'repositories', name, 'src')],
    resolve: {
      alias: {
        '##': path.resolve(__dirname, 'repositories', name, 'src'),
      },
    },
  }));
};

const repositoriesCacheGroups = (repos) => {
  const cacheGroups = {};
  for (let index = 0; index < repos.length; index++) {
    const repoName = repos[index];
    const groupName = `css-async-repo-${repoName}`;

    cacheGroups[groupName] = {
      name: groupName,
      test: new RegExp(`/repositories/${repoName}/`),
      type: 'css/mini-extract',
      chunks: 'async',
      minChunks: 1,
      minSize: 1,
      maxSize: 500000,
      reuseExistingChunk: true,
    };
  }
  return cacheGroups;
};

const modulesCacheGroups = (repos) => {
  const cacheGroups = {};
  for (let index = 0; index < repos.length; index++) {
    const repoName = repos[index];
    const groupName = `css-async-module-${repoName}`;

    cacheGroups[groupName] = {
      name: groupName,
      test: new RegExp(`/node_modules/@consta/${repoName}/`),
      type: 'css/mini-extract',
      chunks: 'async',
      minChunks: 1,
      minSize: 1,
      maxSize: 500000,
      reuseExistingChunk: true,
    };
  }
  return cacheGroups;
};

module.exports = function () {
  return {
    target: 'web',
    // node_modules/@consta/stand/src/root.js
    entry: path.resolve(
      __dirname,
      'node_modules',
      '@consta',
      'stand',
      'src',
      'root',
    ),
    cache: process.env.NODE_ENV === 'development',
    module: {
      rules: [
        ...repositoriesTsRules(repos),
        {
          test: /\.tsx?$/,
          use: require.resolve('babel-loader'),
          include: [path.resolve(__dirname, './src')],
          resolve: {
            alias: {
              '##': path.resolve(__dirname, './src'),
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: require.resolve('babel-loader'),
          include: [
            path.resolve(__dirname, 'node_modules', '@consta', 'stand'),
          ],
          resolve: {
            alias: {
              '##': path.resolve(
                __dirname,
                'node_modules',
                '@consta',
                'stand',
                'src',
              ),
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: require.resolve('babel-loader'),
          include: [path.resolve(__dirname, 'node_modules')],
        },
        {
          test: /\.css$/,
          use: [
            productionMode ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        ...repositoriesMdRules(repos),
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              options: {
                remarkPlugins: [remark],
              },
            },
          ],
          include: [path.resolve(__dirname, './src')],
          resolve: {
            alias: {
              '##': path.resolve(__dirname, './src'),
            },
          },
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              options: {
                remarkPlugins: [remark],
              },
            },
          ],
          include: [path.resolve(__dirname, 'node_modules')],
        },
        {
          test: [
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
            /\.pdf$/,
            /\.woff$/,
            /\.woff2$/,
          ],
          type: 'asset/resource',
          generator: {
            filename: 'static/[name]__[hash:8][ext]',
          },
        },
        {
          test: /\.icon\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                template: (
                  { imports, componentName, props, jsx, exports },
                  { tpl },
                ) => {
                  return tpl`
                              ${imports}
                              import {createIcon} from '@consta/icons/Icon'

                              const Icon = (${props}) => {
                                props = { ...props };
                                return ${jsx};
                              };

                              export default createIcon({
                                m: Icon,
                                s: Icon,
                                xs: Icon,
                                name: 'Icon',
                              });
                        `;
                },
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                dimensions: false,
                svgo: true,
              },
            },
          ],
        },
        {
          test: /\.image\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                dimensions: false,
                svgo: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        ...(isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined),
      }),

      isEnvProduction &&
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),

      new webpack.ProgressPlugin(),

      new MiniCssExtractPlugin({
        filename: 'static/[contenthash].css',
        chunkFilename: 'static/[contenthash].css',
        ignoreOrder: true,
      }),

      new CssMinimizerPlugin(),

      new FaviconsWebpackPlugin(
        path.resolve(__dirname, 'public', 'favicon.svg'),
      ),
    ].filter(Boolean),

    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
      ...(isEnvProduction && {
        asyncChunks: true,
        filename: 'static/[contenthash].js',
        chunkFilename: 'static/[contenthash].js',
        assetModuleFilename: 'static/media/[contenthash][ext]',
      }),
      publicPath: '/',
    },

    optimization: {
      ...(isEnvProduction && {
        splitChunks: {
          cacheGroups: {
            initial_consta_stands: {
              name: `initial_consta_stands`,
              test: /\/node_modules\/@consta\/stand\/src\/stands\//,
              chunks: 'initial',
            },
            initial_node_modules_consta_stand: {
              name: `initial_node_modules_consta_stand`,
              test: /\/node_modules\/@consta\/stand\/(?!src\/stands)/,
              chunks: 'initial',
            },
            initial_node_modules: {
              name: `initial_node_modules`,
              test: /\/node_modules\/(?!@consta\/stand)/,
              chunks: 'initial',
            },
            ...repositoriesCacheGroups(repos),
            ...modulesCacheGroups(repos),
          },
        },
      }),
    },

    devServer: {
      historyApiFallback: true,
    },
  };
};
