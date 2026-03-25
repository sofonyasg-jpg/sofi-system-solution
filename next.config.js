/** @type {import('next').NextConfig} */
const nextConfig = {
  // PWA ስህተት እንዳይፈጥር ለጊዜው አጥፍተነዋል
  typescript: {
    // ቢልድ በሚያደርግበት ጊዜ የትየባ ስህተት ቢኖር እንኳ እንዳያቆም ያደርገዋል
    ignoreBuildErrors: true,
  },
  eslint: {
    // የሊንቲንግ ስህተቶች ቢልዱን እንዳያቋርጡት ያደርጋል
    ignoreDuringBuilds: true,
  },
  // በምስሎች ላይ ስህተት እንዳይመጣ
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;