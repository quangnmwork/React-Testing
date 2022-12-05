import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config({});
export default defineConfig({
  projectId: 'g8k44a',
  env: {
    'my-var': 'ok',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    supportFile: false,

    setupNodeEvents(on, config) {
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {};

      // you could extract only specific variables
      // and rename them if necessary
      config.env.FOO = process.env.FOO;
      config.env.ping = process.env.CYPRESS_ping;
      config.env.BAR = process.env.BAR;
      config.env.username = process.env.USER_NAME;
      console.log('extended config.env with process.env.{FOO, BAR, USER_NAME}');

      return config;
    },
  },
});
