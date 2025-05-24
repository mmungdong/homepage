'use client';
import Header from '@/components/Header';
import CategoryNavigator from '@/components/CategoryNavigator';
import { AlistHost } from '@/constants/hosts';

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
            name: 'MDN JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            iconName: 'language',
            color: 'blue-500',
            description: 'MDN JavaScript文档'
          },
          {
            name: 'JavaScript高级系列',
            url: 'https://juejin.cn/column/7403629671684177955',
            iconName: 'code',
            color: 'yellow-500',
            description: 'XiaoYu2002的专栏(掘金)'
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
          },
          {
            name: 'React笔记',
            url: 'https://www.yuque.com/mungdong/blog/ll3azmvrmhbegm0a',
            iconName: 'widgets',
            color: 'blue-600',
            description: 'React学习笔记'
          },
          {
            name: 'Nextjs学习资料',
            url: 'https://juejin.cn/book/7307859898316881957',
            iconName: 'widgets',
            color: 'blue-600',
            description: 'Nextjs学习资料'
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
  ai: {
    title: 'AI',
    subCategories: [
      {
        title: '大模型',
        links: [
          {
            name: '学习资料',
            url: `${AlistHost}/学习/AI%20&%20大模型/大模型`,
            iconName: 'code',
            color: 'blue-500',
            description: '大模型学习资料'
          }
        ]
      },
      {
        title: 'RAG',
        links: [
          {
            name: '学习资料',
            url: `${AlistHost}/学习/AI%20&%20大模型/RAG`,
            iconName: 'code',
            color: 'blue-500',
            description: 'RAG学习资料'
          }
        ]
      },
    ],
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