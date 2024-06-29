/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "localhost"
        }, {
            hostname: "inthecourse-cms.tiscacatalin.com"
        }]
    }
}

module.exports = nextConfig
