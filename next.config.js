// allows modification or extension of next.js configuration (add webpacks, enable compression, define env variables...)
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY
    }
}

module.exports = nextConfig
