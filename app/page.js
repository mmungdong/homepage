'use client';
import Header from '@/components/Header';
import CategoryNavigator from '@/components/CategoryNavigator';
import { AlistHost } from '@/constants/hosts';

const HOME_LINK_CATEGORIES = {
  common: {
    title: '常用工具',
    subCategories: [
      {
        title: '常用工具',
        links: [
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
            iconName: 'code',
            color: 'gray-600',
            description: '代码托管平台'
          },
          {
            name: '语雀',
            url: 'https://www.yuque.com/dashboard',
            iconName: 'book',
            color: 'purple-500',
            description: '知识管理工具'
          },
          {
            name: 'Vercel',
            url: 'https://vercel.com',
            iconName: 'cloud',
            color: 'blue-500',
            description: '部署平台'
          },
          {
            name: 'Figma',
            url: 'https://www.figma.com',
            iconName: 'brush',
            color: 'orange-500',
            description: 'UI设计工具'
          }
        ]
      }
    ]
  },
  alist: {
    title: 'Alist',
    subCategories: [
      {
        title: '影视资源',
        links: [
          {
            name: '影视资源',
            url: `${AlistHost}/%E7%94%B5%E8%A7%86%E5%89%A7`,
            iconName: 'movie',
            color: 'green-500',
            description: '电影/电视剧/动漫/综艺'
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
            iconName: 'chat',
            color: 'green-500',
            description: 'AI助手'
          },
          {
            name: 'KIME',
            url: 'https://www.kimi.com/chat',
            iconName: 'chat',
            color: 'green-500',
            description: 'AI助手'
          },
          {
            name: '腾讯元宝',
            url: 'https://yuanbao.tencent.com/chat',
            iconName: 'chat',
            color: 'green-500',
            description: 'AI助手'
          },
          {
            name: 'ChatGPT',
            url: 'https://chat.openai.com',
            iconName: 'chat',
            color: 'teal-500',
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
            name: '日程管理',
            url: '/calendar',
            iconName: 'event',
            color: 'green-500',
            description: '我的日程安排'
          },
          {
            name: '笔记',
            url: '/notes',
            iconName: 'note',
            color: 'blue-500',
            description: '我的笔记记录'
          },
          {
            name: '书签',
            url: '/bookmarks',
            iconName: 'bookmark',
            color: 'yellow-500',
            description: '我收藏的链接'
          }
        ]
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNavigator categories={HOME_LINK_CATEGORIES} />
    </div>
  );
}