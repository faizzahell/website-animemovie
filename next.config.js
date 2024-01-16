/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        hostname: "cdn.myanimelist.net",
=======
        hostname: "cdn.myanimelist.net", 
      }, 
      {
        hostname: "avatars.githubusercontent.com"
>>>>>>> cba5020 (add dashboard)
      }
    ]
  }
}

module.exports = nextConfig
