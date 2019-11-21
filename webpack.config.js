const path = require("path");
const webpack = require("webpack");
const PRODUCTION = process.env.NODE_ENV === "production";


const config = {
    entry: {
        mmf: path.join(__dirname, "index.js"),
        styles: path.join(__dirname, "material-forms.scss")
    },
    output: {
        filename: "[name].js",
        library: ["MMF"],
        path: path.resolve(__dirname, PRODUCTION ? "dist" : "build")
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",
    mode: PRODUCTION ? "production" : "development",

    resolve: {
        modules: [".", "node_modules"]
    },

    externals: {
        mithril: "m"
    },

    module: {
        rules: [
            {
                test: /.*.js$/,
                loader: require.resolve("babel-loader"),
                include: [
                    path.resolve(__dirname, "app"),
                    path.resolve(__dirname, "lib")
                ],
                options: {
                    presets: [require.resolve("babel-preset-es2015")],
                    plugins: [
                        require.resolve("babel-plugin-transform-object-assign"),
                        require.resolve("babel-plugin-transform-object-rest-spread") // redux-undo
                    ],
                    babelrc: false,
                    cacheDirectory: true
                }
            },
            {
                test: [/material-forms.scss$/],
                use: [
                    "file-loader?name=[name].css",
                    "extract-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: !PRODUCTION
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !PRODUCTION,
                            sassOptions: {
                                includePaths: [
                                    path.join(__dirname, "node_modules")
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /.*\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                loader: "url-loader",
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff\d?$|\.ttf$|\.eot|\.otf|\.wav$|\.mp3$/
            },
            {
                loaders: [
                    "file-loader?name=index.html",
                    "extract-loader",
                    "html-loader"
                ],
                include: [path.join(__dirname, "app", "index.html")]
            },
            {
                loaders: "json-loader",
                test: /\.json$/
            }
        ]
    },

    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8080
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: true
        })
    ].concat(PRODUCTION ? [
        new (require("uglifyjs-webpack-plugin"))({
            sourceMap: false,
            compress: { drop_console: true }
        })
    ] : [])
};


module.exports = config;
