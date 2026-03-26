/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ማሳሰቢያ፦ ቀደም ሲል የነበረው 'eslint' የሚለው ቁልፍ እዚህ አያስፈልግም፤ 
     Next.js አሁን በራሱ ስለሚቆጣጠረው ማስወገዱ ማስጠንቀቂያውን ያጠፋዋል።
  */
  
  images: {
    // በዌብሳይቱ ላይ የምንጠቀማቸው ምስሎች ከየትኛውም ምንጭ እንዲመጡ ይፈቅዳል
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // ሌሎች ተጨማሪ ኮንፊገሬሽኖች ካሉህ እዚህ መቀጠል ትችላለህ
};

export default nextConfig;