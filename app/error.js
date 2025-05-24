'use client'

export default function Error({ error }) {
  return <div className="text-red-500">发生错误：{error.message}</div>
}