/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const PRODUCTION = process.env.NODE_ENV === "production";


const config = {

    entry: {
        mmf: path.join(__dirname, "index.ts"),
        all: path.join(__dirname, "material-forms.scss"),
        layout: path.join(__dirname, "theme/layout.scss"),
        typography: path.join(__dirname, "theme/typography.scss"),
        material: path.join(__dirname, "theme/theme-material.scss"),
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
        extensions: [".tsx", ".ts", ".js"],
        modules: [".", "node_modules"]
    },

    externals: {
        mithril: "m"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "tsconfig.json"),
                        compilerOptions: {
                            sourceMap: !PRODUCTION,
                            declaration: PRODUCTION
                        }
                    }
                }
            },
            // {
            //     test: /\.js$/,
            //     loader: require.resolve("babel-loader"),
            //     include: [
            //         path.resolve(__dirname, "components")
            //     ],
            //     options: {
            //         presets: [
            //             require.resolve("@babel/preset-env")
            //         ],
            //         plugins: [
            //             require.resolve("@babel/plugin-transform-object-assign"),
            //             require.resolve("@babel/plugin-proposal-object-rest-spread") // redux-undo
            //         ],
            //         babelrc: false,
            //         cacheDirectory: true
            //     }
            // },
            {
                test: [/\.scss$/],
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
            }
        ]
    },

    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8080
    },

    optimization: {
        minimizer: PRODUCTION ? [new TerserPlugin()] : []
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: !PRODUCTION
        })
    ]
};


module.exports = config;
