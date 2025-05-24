export const AlistHost = process.env.NEXT_PUBLIC_CF_ALIST_HOST
  ? process.env.NEXT_PUBLIC_CF_ALIST_HOST.replace(/\/$/, '')
  : '';