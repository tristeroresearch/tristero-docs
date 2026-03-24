'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 relative">
      {/* Background radial gradient - fixed at viewport 0,0 */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle 800px at 0px 0px, rgba(249, 121, 14, 0.225) 0%, transparent 90%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo - switches based on theme */}
        <div className="mb-8">
          <Image 
            src={theme === 'dark' ? '/tristeroLight.png' : '/tristero.png'} 
            alt="Tristero" 
            width={160} 
            height={160}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Tristero Docs
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          Explore documentation for integrating and using the Tristero trading platform
        </p>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <Link 
            href="/docs/tristero/python-sdk"
            className="group relative flex flex-row items-center p-4 border-2 border-border bg-card hover:bg-[#F9790E] hover:border-[#F9790E] transition-all duration-50 hover:shadow-lg hover:shadow-[#F9790E]/20 overflow-hidden"
          >
            <div className="text-left flex-1">
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors">Python SDK</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">Trading SDK documentation</p>
            </div>
            <div className="absolute right-4 top-4">
              <svg className="w-6 h-6 text-[#F9790E] group-hover:text-white" viewBox="0 0 32 32" fill="currentColor">
                <path d="M15.885,2.1c-7.1,0-6.651,3.07-6.651,3.07V8.36h6.752v1H6.545S2,8.8,2,16.005s4.013,6.912,4.013,6.912H8.33V19.556s-.13-4.013,3.9-4.013h6.762s3.772.06,3.772-3.652V5.8s.572-3.712-6.842-3.712h0ZM12.153,4.237a1.214,1.214,0,1,1-1.183,1.244v-.02a1.214,1.214,0,0,1,1.214-1.214h0Z"/>
                <path d="M16.085,29.91c7.1,0,6.651-3.08,6.651-3.08V23.65H15.985v-1h9.47S30,23.158,30,15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13,4.013-3.9,4.013H12.975S9.2,16.356,9.2,20.068V26.2s-.572,3.712,6.842,3.712h.04Zm3.732-2.147A1.214,1.214,0,1,1,21,26.519v.03a1.214,1.214,0,0,1-1.214,1.214h.03Z"/>
              </svg>
            </div>
          </Link>

          <Link 
            href="/docs/tristero"
            className="group relative flex flex-row items-center p-4 border-2 border-border bg-card hover:bg-[#F9790E] hover:border-[#F9790E] transition-all duration-50 hover:shadow-lg hover:shadow-[#F9790E]/20 overflow-hidden"
          >
            <div className="text-left flex-1">
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors">Tristero API</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">Core API reference</p>
            </div>
            <div className="absolute right-4 top-4">
              <svg className="w-6 h-6 text-[#F9790E] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </Link>

          <Link 
            href="/docs/feather"
            className="group relative flex flex-row items-center p-4 border-2 border-border bg-card hover:bg-[#F9790E] hover:border-[#F9790E] transition-all duration-50 hover:shadow-lg hover:shadow-[#F9790E]/20 overflow-hidden"
          >
            <div className="text-left flex-1">
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors">Feather API</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">Cross-chain swap relay</p>
            </div>
            <div className="absolute right-4 top-4">
              <svg className="w-6 h-6 text-[#F9790E] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
