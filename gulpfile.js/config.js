/**
*
* FireStarter - Configs
*
**/

module.exports = {
    paths: {
        dev: {
            root: './src',
            styles: './src/assets/styles',
            scripts: './src/assets/scripts'
        },
        build: {
            root: './build',
            css: './build/assets/css',
            js: './build/assets/js'
        }
    },

    tasks: {
        styles: {
            postcss: {
                autoprefixer: {
                    browsers: ['last 2 versions']
                }
            }
        }
    }
};
