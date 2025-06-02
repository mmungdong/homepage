'use client';
import CategoryNavigator from '@/components/CategoryNavigator';
import { AlistHost } from '@/constants/hosts';

const HOME_LINK_CATEGORIES = {
  Alist: {
    title: 'Alist',
    subCategories: [
      {
        title: '影视资源',
        links: [
          {
            name: 'BT之家1Lou站',
            url: 'https://www.1lou.one',
            description: '资源站点'
          },
          {
            name: '武林外传',
            url: `${AlistHost}/电视剧/W武-林外传`,
            description: '武林外传'
          },
          {
            name: '影视资源',
            url: `${AlistHost}/%E7%94%B5%E8%A7%86%E5%89%A7`,
            description: '电影/电视剧/动漫/综艺'
          }
        ],
      },
    ]
  },
  common: {
    title: '常用工具',
    subCategories: [
      {
        title: '常用工具',
        links: [
          {
            name: 'blog',
            url: 'https://blog.yangfanbin.cn/',
            description: 'yangfanbin的个人博客',
          },
          {
            name: 'cloudflare',
            url: 'https://dash.cloudflare.com/',
            description: '部署平台'
          },
          {
            name: 'Vercel',
            url: 'https://vercel.com',
            description: '部署平台'
          },
          {
            name: 'apifox - webhook',
            url: 'https://app.apifox.com/project/6494696',
            description: 'webhook部署接口'
          },
          {
            name: 'Google',
            url: 'https://www.google.com',
            iconName: 'search',
            color: 'blue-500',
            description: '搜索引擎'
          },
          {
            name: 'GitHub',
            url: 'https://github.com',
            description: '代码托管平台'
          }
        ]
      }
    ]
  },
  ai: {
    title: 'AI工具',
    subCategories: [
      {
        title: 'AI助手',
        links: [
          {
            name: '豆包',
            url: 'https://www.doubao.com/chat/',
            description: 'AI助手'
          },
          {
            name: 'KIME',
            url: 'https://www.kimi.com/chat',
            description: 'AI助手'
          },
          {
            name: '腾讯元宝',
            url: 'https://yuanbao.tencent.com/chat',
            description: 'AI助手'
          },
          {
            name: 'ChatGPT',
            url: 'https://chat.openai.com',
            description: 'AI助手'
          }
        ]
      }
    ]
  },
  custom: {
    title: '我的工具',
    subCategories: [
      {
        title: '我的工具',
        links: [
           {
            name: '语雀笔记',
            url: 'https://www.yuque.com/dashboard',
            description: '计算机学习笔记'
          },
        ]
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <CategoryNavigator categories={HOME_LINK_CATEGORIES} />
    </div>
  );
}