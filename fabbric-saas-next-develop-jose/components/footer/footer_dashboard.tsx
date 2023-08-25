import Link from 'next/link';

const { SITE_NAME } = process.env;

export default async function FooterDashboard() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="bg-white text-black fixed bottom-0 w-full z-50 p-3 text-center" style={{borderTop: '1px solid #7745FF'}}>
        <div style={{color: '#7745FF', fontSize: '12px' }}>Copyright | Políticas de Privacidad | Aviso Legal</div>
    </footer>
  );
}
