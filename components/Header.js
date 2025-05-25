'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(pathname || '/');
  }, [pathname]);

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="bg-white dark:bg-[#09090b] border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 左侧 Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer hover:opacity-80 transition"
          >
            <span className="material-icons text-2xl text-blue-500 mr-2">
              person_pin
            </span>
            <h1 className="text-xl font-bold tracking-wide">
              Yang FanBin
            </h1>
          </div>

          {/* 中间 Tab */}
          <nav className="flex flex-1 justify-center ml-8">
            <div className="flex space-x-6 items-center">
              <a
                href="/"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 ${
                  currentPath === '/' ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
                }`}
              >
                <span className="material-icons-outlined mr-1">home</span>
                <span>首页</span>
              </a>
              <a
                href="/code"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 ${
                  currentPath === '/code' ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
                }`}
              >
                <span className="material-icons-outlined mr-1">code</span>
                <span>Code</span>
              </a>
              <a
                href="/about"
                className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 ${
                  currentPath === '/about' ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
                }`}
              >
                <span className="material-icons-outlined mr-1">person</span>
                <span>关于</span>
              </a>
            </div>
          </nav>

          {/* 右侧主题切换 */}
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
