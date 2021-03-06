module.exports = {
  entry: './src/react-selectable.js',
  output: {
    path: './dist', // This is where images AND js will go
    publicPath: '', // This is used to generate URLs to e.g. images
    filename: 'react-selectable.js',
    library: 'Selectable',
    libraryTarget: 'var'
  },
  externals: {
    'react/addons': 'React'
  },
  module: {
    loaders: [,
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
      modulesDirectories: ["node_modules"]
  }
};
