import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'g8k44a',
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
