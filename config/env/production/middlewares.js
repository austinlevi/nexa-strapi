module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:5500', 'https://nexacreativelabs.netlify.app'], // update to match your frontend domains
    },
  },
});

