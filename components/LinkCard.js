"use client";
import { useEffect, useState } from 'react';
import { checkConnectivity } from '../utils/utils';

export default function LinkCard({ name, url, description }) {
  const [status, setStatus] = useState(false);
  
  useEffect(() => {
    // 检查链接状态
    checkConnectivity(url).then(result => {
      result && setStatus(true);
    });
    
    // 定期检查（每5分钟一次）
    const interval = setInterval(checkConnectivity, 60000 * 5);
    
    // 组件卸载时清除定时器
    return () => clearInterval(interval);
  }, [url]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
    >
      <div className="flex items-center space-x-4 mb-2">
        <div className="flex items-center space-x-2">
          <span className={`w-2 h-6 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}