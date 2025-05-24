import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="#tags"><a>标签</a></Link></li>
        <li><Link href="#links"><a>链接</a></Link></li>
        <li><Link href="#about"><a>关于</a></Link></li>
      </ul>
    </nav>
  );
}