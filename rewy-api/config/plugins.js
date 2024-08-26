module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dvafgtpyn',
        api_key: '747258441886985',
        api_secret: '3_Kj94282ZyoPFVPU9Glr0eH0ok',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      ckeditor: {
        enabled: true,
        resolve: "./src/plugins/strapi-plugin-ckeditor"
      },
    },
  },
  // ...
})
