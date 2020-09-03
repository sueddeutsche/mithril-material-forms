/* eslint-env node */
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PRODUCTION = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {

    entry: "./app/index.ts",

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "docs")
    },

    context: __dirname,
    target: "web",
    devtool: PRODUCTION ? false : "source-map",
    mode: PRODUCTION ? "production" : "development",

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        // modules: [".", "node_modules"]
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
            {
                test: [/\.scss$/],
                use: [
                    // "file-loader?name=[name].css",
                    // "extract-loader",
                    "style-loader",
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
            }
        ]
    },

    devServer: {
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 8081
    },

    optimization: {
        minimizer: PRODUCTION ? [new TerserPlugin()] : []
    },

    plugins: [
        new webpack.DefinePlugin({
            DEBUG: !PRODUCTION
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessorPluginOptions: {
                preset: ["default", {
                    discardComments: { removeAll: true }
                }]
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            template: "app/index.html"
        })
    ]
};


module.exports = config;
