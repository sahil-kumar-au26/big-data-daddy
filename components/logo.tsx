// app/components/Logo.tsx
export const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill="#2E5BFF"/>
      <path d="M30 30H50C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70H30V30Z" stroke="white" strokeWidth="8"/>
      <circle cx="50" cy="50" r="10" fill="white" />
    </svg>
    <span className="text-2xl font-black tracking-tighter text-white">
      BIGDATA<span className="text-blue-500">DADDY</span>
    </span>
  </div>
);