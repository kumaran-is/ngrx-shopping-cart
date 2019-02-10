const webpack = require('webpack');
const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
    plugins: [
        new webpack.BannerPlugin('----- NgRx Shopping cart By Kumaran Srinivasan -----'),
        new PacktrackerPlugin({
          project_token: '17293341-7c52-4d72-8ecd-607c628ebbd0',
          upload: true,
          fail_build: true
        })
    ]
}
