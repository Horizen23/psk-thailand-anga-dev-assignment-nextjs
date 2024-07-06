

export const API_CONFIG = {
         WEB_DOMAIN: process.env.NEXT_PUBLIC_WEB_DOMAIN ,
         CMS_CONTENT_ENDPOINT: process.env.NEXT_PUBLIC_CMS_CONTENT_ENDPOINT ,
         IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN ,
         WEATHER_API: process.env.WEATHER_API ,
         WEATHER_X_RAPIDAPI_HOST: process.env.WEATHER_X_RAPIDAPI_HOST ,
         WEATHER_X_RAPIDAPI_KEY: process.env.WEATHER_X_RAPIDAPI_KEY ,
         EMAIL_SERVICE:process.env.EMAIL_SERVICE,
         EMAIL_HOST:process.env.EMAIL_HOST,
         EMAIL_PORT:Number(process.env.EMAIL_PORT),
         EMAIL_SECURE:!!process.env.EMAIL_SECURE,
         EMAIL_AUTH_USER: process.env.EMAIL_AUTH_USER,
         EMAIL_AUTH_APP_PASSWORD:process.env.EMAIL_AUTH_APP_PASSWORD,
} as const
     