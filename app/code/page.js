'use client';
import Header from '@/components/Header';
import CategoryNavigator from '@/components/CategoryNavigator';

// 定义代码页的链接分类
const CODE_LINK_CATEGORIES = {
  cloud_native: {
    title: '云原生',
    subCategories: [
      {
        title: 'Kubernetes',
        links: [
          {
            name: 'Kubernetes文档',
            url: 'https://kubernetes.io/docs/home/',
            iconName: 'cloud',
            color: 'blue-500',
            description: 'Kubernetes官方文档'
          },
          {
            name: 'Helm',
            url: 'https://helm.sh/docs/',
            iconName: 'code',
            color: 'gray-600',
            description: 'Helm官方文档'
          }
        ]
      },
      {
        title: 'Docker',
        links: [
          {
            name: 'Docker文档',
            url: 'https://docs.docker.com/get-started/',
            iconName: 'storage',
            color: 'teal-500',
            description: 'Docker官方文档'
          }
        ]
      }
    ]
  },
  frontend: {
    title: '前端',
    subCategories: [
      {
        title: 'JavaScript',
        links: [
          {
            name: 'JavaScript高级系列',
            url: 'https://juejin.cn/column/7403629671684177955',
            iconName: 'code',
            color: 'yellow-500',
            description: 'XiaoYu2002的专栏(掘金)'
          },
          {
            name: 'MDN JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            iconName: 'language',
            color: 'blue-500',
            description: 'MDN JavaScript文档'
          }
        ]
      },
      {
        title: 'React',
        links: [
          {
            name: 'React官方文档',
            url: 'https://react.dev/docs/getting-started',
            iconName: 'widgets',
            color: 'blue-600',
            description: 'React官方文档'
          }
        ]
      }
    ]
  },
  backend: {
    title: '后端',
    subCategories: [
      {
        title: 'Golang',
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
          }
        ]
      },
      {
        title: 'Python',
        links: [
          {
            name: 'Python官方文档',
            url: 'https://docs.python.org/3/',
            iconName: 'code',
            color: 'green-500',
            description: 'Python官方文档'
          }
        ]
      }
    ]
  },
  interview: {
    title: '面试',
    subCategories: [
      {
        title: '算法',
        links: [
          {
            name: 'LeetCode',
            url: 'https://leetcode.com/',
            iconName: 'code',
            color: 'blue-500',
            description: '算法练习平台'
          }
        ]
      },
      {
        title: '系统设计',
        links: [
          {
            name: 'Grokking the System Design Interview',
            url: 'https://www.educative.io/courses/grokking-the-system-design-interview',
            iconName: 'settings',
            color: 'teal-500',
            description: '系统设计面试指南'
          }
        ]
      }
    ]
  }
};

export default function CodePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNavigator categories={CODE_LINK_CATEGORIES} />
    </div>
  );
}