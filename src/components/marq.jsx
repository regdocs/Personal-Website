import Marquee from "react-fast-marquee";

function Marq() {
  return (
    <div className="absolute overflow-hidden h-full w-full pointer-events-none">
      <div className="text-white text-sm -rotate-90 left-4 top-1/2 absolute -translate-x-1/2 w-[100vh] pointer-events-auto">
        <Marquee
          delay={3}
          pauseOnHover
          speed={0.3}
          className="hover:cursor-default"
        >
          Привет • Bonjour • 你好 • مرحبًا • Hujambo • 안녕 • नमस्ते • Ciao •
          নমস্কার • Merhaba • やあ • שלום • Γειά σου • Բարեւ • Olá • ਸਤ ਸ੍ਰੀ
          ਅਕਾਲ • Xin chào • سلام • Kumusta • வணக்கம் • హలో • مهلا • Привіт • ಹಲೋ
          • สวัสดี • Salut • ສະບາຍດີ • ਨਮਸਕਾਰ • مرحبا • Բարեւանդ • ഹലോ •
          ନମସ୍କାର • سلام • پہلوان • ជំរាបសួរ • ਸਤ ਸ੍ਰੀ ਅਕਾਲ • Привіт • ಹಲೋ •
          สวัสดี • Salut • ສະບາຍດີ • ਨਮਸਕਾਰ • مرحبا • Բարեւանդ • ഹലോ • ନମସ୍କାର
          • سلام • پہلوان • ជំរាបសួរ
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
        <div className="pointer-events-none absolute top-0 marquee-overlay w-full h-full z-10" />
      </div>
    </div>
  );
}

export default Marq;
