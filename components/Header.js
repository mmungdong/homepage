'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(pathname || '/');
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="material-icons text-2xl text-indigo-600 mr-2">
            person_pin
          </span>
          <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
            Yang FanBin
          </h1>
        </div>
        
        {/* 导航链接 */}
        <div className="flex space-x-6 items-center">
          <a
            href="/"
            className={`flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${
              currentPath === '/' ? 'text-indigo-600 font-medium' : ''
            }`}
          >
            <span className="material-icons-outlined mr-1">home</span>
            <span>首页</span>
          </a>
          <a
            href="/code"
            className={`flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${
              currentPath === '/code' ? 'text-indigo-600 font-medium' : ''
            }`}
          >
            <span className="material-icons-outlined mr-1">code</span>
            <span>Code</span>
          </a>
          <a
            href="/about"
            className={`flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${
              currentPath === '/about' ? 'text-indigo-600 font-medium' : ''
            }`}
          >
            <span className="material-icons-outlined mr-1">person</span>
            <span>关于</span>
          </a>
        </div>
      </nav>
    </header>
  );
}