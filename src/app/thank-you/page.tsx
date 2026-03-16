'use client'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <a href="/" className="mb-12">
        <img src="/sitelogo22.png" alt="Kingdta" className="h-10 object-contain" />
      </a>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-10 py-14 flex flex-col items-center text-center max-w-md w-full">
        {/* Check icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">感谢您的询盘！</h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-2">
          Thank you for reaching out to Kingdta.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          We have received your inquiry and our team will respond within <span className="font-semibold text-gray-700">24 hours</span>.
        </p>

        <div className="w-full h-px bg-gray-100 mb-8" />

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-green-600/20 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </a>
      </div>

      <p className="mt-8 text-xs text-gray-400">© {new Date().getFullYear()} Shenzhen Kingdta Technology Co., Ltd.</p>
    </div>
  )
}
