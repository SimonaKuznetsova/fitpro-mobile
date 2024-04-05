const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
            hot: true,
            inlineRequires: true,
        }),
    },
    resolver: {
        sourceExts: ["js", "ts", "jsx", "tsx", "json", "svg"],
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
