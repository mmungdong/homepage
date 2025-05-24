import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">
          关于这个页面
        </h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="mb-6">
            这是一个极简风格的个人主页，用于快速访问我常用的工具和网站。
          </p>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-700">技术栈</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Next.js</li>
            <li className="mb-2">Tailwind CSS</li>
            <li className="mb-2">App Router</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-700">特点</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">极简设计风格</li>
            <li className="mb-2">响应式布局</li>
            <li className="mb-2">可扩展的卡片式链接</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2 text-gray-700">定制方法</h3>
          <p className="mb-6">
            你可以通过编辑 <code className="bg-gray-100 p-1 rounded">app/page.js</code> 文件来添加或修改链接。
          </p>
        </div>
      </main>
    </div>
  );
}