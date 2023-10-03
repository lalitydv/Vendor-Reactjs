const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: 'http://localhost:8081/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Add any other image file extensions you need
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Output the file with its original name and extension
              outputPath: 'images/', // Define the output path for images
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'order',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Order': './src/Order/Order',
        './Pending': './src/Order/Pending',
        './Confirmed': './src/Order/Confirmed',
        './Packing': './src/Order/Packing',
        './Delivery': './src/Order/Delivery',
        './DeliveryOut': './src/Order/DeliveryOut',
        './Return': './src/Order/Return',
        './DeliveryFailed': './src/Order/DeliveryFailed',
        './OrderCancled': './src/Order/OrderCancled',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});
