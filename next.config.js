/** @type {import('next').NextConfig} */
const nextConfig = {
  /* እዚህ ውስጥ ሌሎች የNext.js ኮንፊገሬሽኖችን መጨመር ትችላለህ */
  reactStrictMode: true,
  // ለምሳሌ ምስሎችን ከሌላ ሳይት የምታመጣ ከሆነ (እንደ Cloudinary ወይም ሌላ) እዚህ ይፈቀዳል
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;