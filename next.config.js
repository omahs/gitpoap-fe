/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'assets.poap.xyz',
      'github.com',
      'githubusercontent.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      '*',
    ],
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        stream: false,
        os: false,
        https: false,
        buffer: require.resolve('buffer'),
      };
    }

    return config;
  },
};
