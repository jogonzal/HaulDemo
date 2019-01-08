import { createWebpackConfig } from "haul";

export default {
  webpack: env => {
    const config = createWebpackConfig({
      entry: `./src/index.${env.platform}.tsx`,
    })(env);

    config.module.rules = [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          }
        ]
      },
      ...config.module.rules,
    ];

    config.resolve.extensions = [
      '.ts',
      '.tsx',
      `.${env.platform}.ts`,
      '.native.ts',
      `.${env.platform}.tsx`,
      '.native.tsx',
      ...config.resolve.extensions,
    ]

    return config;
  }
};