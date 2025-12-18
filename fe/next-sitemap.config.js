// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://camdocantho.net',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
}