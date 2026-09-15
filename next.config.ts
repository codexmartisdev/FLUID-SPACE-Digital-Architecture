import type {NextConfig} from 'next';
import {PHASE_DEVELOPMENT_SERVER} from 'next/constants';

const createSecurityHeaders = (isDev: boolean) => {
  const contentSecurityPolicy = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    isDev
      ? "frame-ancestors 'self' https://aistudio.google.com https://*.google.com https://*.googleusercontent.com"
      : "frame-ancestors 'none'",
    "form-action 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    isDev
      ? "connect-src 'self' ws: wss: http: https:"
      : "connect-src 'self'",
    "frame-src 'none'",
    "worker-src 'self' blob:",
    "media-src 'self' data: blob:",
    "manifest-src 'self'",
    ...(isDev ? [] : ['upgrade-insecure-requests']),
  ].join('; ');

  return [
    {key: 'Content-Security-Policy', value: contentSecurityPolicy},
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
    },
    ...(isDev
      ? []
      : [
          {key: 'X-Frame-Options', value: 'DENY'},
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ]),
  ];
};

const createNextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    poweredByHeader: false,
    typescript: {
      ignoreBuildErrors: false,
    },
    // Allow access to remote image placeholders and curated photography.
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: createSecurityHeaders(isDev),
        },
      ];
    },
    output: 'standalone',
    transpilePackages: ['motion'],
    webpack: (config, {dev}) => {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      if (dev && process.env.DISABLE_HMR === 'true') {
        config.watchOptions = {
          ignored: /.*/,
        };
      }
      return config;
    },
  };
};

export default createNextConfig;
