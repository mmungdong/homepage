export default function Links() {
  const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { name: 'Vercel', url: 'https://vercel.com' },
    { name: 'Medium', url: 'https://medium.com' },
    { name: 'Notion', url: 'https://www.notion.so' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com' },
  ];
  
  return (
    <section id="links" className="links-section">
      <h2>我的链接</h2>
      <div className="links-grid">
        {links.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}