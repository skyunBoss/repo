import { IConfig } from '@umijs/core';
import { defineConfig } from 'dumi';
import path from 'path';

const umiConfig: IConfig = {
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  title: 'DripTable',
  favicon: 'https://img13.360buyimg.com/imagetools/jfs/t1/204416/31/13736/8631/617f8334E9ae79a1c/5b96dfdce922e5fb.png',
  logo: 'https://img11.360buyimg.com/imagetools/jfs/t1/156025/11/22552/175523/617fb164E678b9642/6b8c55c5079b9819.jpg',
  outputPath: 'docs-dist',
  hash: true,
  mfsu: false,
  dynamicImport: {
    loading: '/docs/loading.js',
  },
  locales: [['zh-CN', '中文']],
  ignoreMomentLocale: false,
  mode: 'site',
  esbuild: {},
  publicPath: '/',
  ssr: {},
  alias: {
    'drip-table': path.resolve(__dirname, './packages/drip-table/'),
  },
  fastRefresh: {},
  chainWebpack(memo) {
    const packagePath = path.resolve(__dirname, '../packages');
    memo.module.rule('js').include.add(packagePath);
  },
  resolve: {
    includes: ['docs', 'packages/drip-table/src'],
  },
  extraBabelIncludes: [
    path.join(__dirname, './packages/drip-table/src/'),
  ],
};

export default defineConfig(umiConfig);
