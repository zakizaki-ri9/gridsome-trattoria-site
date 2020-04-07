// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'TRATTORIA e BAR PORTO',
  icon: 'src/img/favicon.png',
  titleTemplate: `TRATTORIA e BAR PORTO - %s`,
  plugins: [
    'gridsome-plugin-pug',
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-140372616-1',
      },
    },
  ],
}
