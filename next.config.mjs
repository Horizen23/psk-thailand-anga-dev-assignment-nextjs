
import { URL } from 'url';

const imageDomain = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;
const parsedUrl = new URL(imageDomain);

/**
* @typedef {import('next').NextConfig} NextConfig
*/

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
         forceSwcTransforms: true,
},
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV === 'production' ? false : true,
      ssr: true,
    },
  },
 
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  publicRuntimeConfig: {
    CMS_CONTENT_ENDPOINT: process.env.NEXT_PUBLIC_CMS_CONTENT_ENDPOINT ,
    IMAGE_DOMAIN: process.env.NEXT_PUBLIC_CMS_CONTENT_ENDPOINT ,
  },
  serverRuntimeConfig: {
    CMS_CONTENT_ENDPOINT: process.env.NEXT_PUBLIC_CMS_CONTENT_ENDPOINT ,
    IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN ,
  },
  images: {
    remotePatterns: [
      {
        protocol: parsedUrl.protocol.slice(0, -1), 
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || '', 
        pathname: '**',
      },
    ],
  },
  
}



export default nextConfig
