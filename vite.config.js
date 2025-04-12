export default {
    server: {
      proxy: {
        '/react-tours-project': {
          target: 'https://course-api.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/react-tours-project/, '/react-tours-project'),
        },
      },
    },
  };