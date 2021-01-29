module.exports = {
    images: {
        domains: ['media.graphcms.com']
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    async rewrites() {
        return [
            {
                source: '/bee.js',
                destination: 'https://cdn.splitbee.io/sb.js'
            },
            {
                source: '/_hive/:slug',
                destination: 'https://hive.splitbee.io/:slug'
            }
        ];
    }
};
