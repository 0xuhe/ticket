/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#409EFF',
        success: '#67C23A',
        warning: '#E6A23C',
        danger: '#F56C6C',
        info: '#909399',
      },
      textColor: {
        primary: '#303133',
        regular: '#606266',
        secondary: '#909399',
        placeholder: '#C0C4CC',
      },
      borderColor: {
        base: '#DCDFE6',
        light: '#E4E7ED',
        lighter: '#EBEEF5',
        lightest: '#F2F6FC',
      },
    },
  },
  variants: {},
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
