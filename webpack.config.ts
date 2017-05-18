import { join } from "path";

module.exports = {
    context: join(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: join(__dirname, "public"),
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader!awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.html$/,
                loader: ["file-loader?name=[name].[ext]", "extract-loader", "html-loader"],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: "file-loader?name=[path][name].[ext]",
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"],
            },
            {
                // put favicon in root
                test: /favicon\.ico$/,
                use: "file-loader?name=favicon.ico",
            },
        ],
    },
};
