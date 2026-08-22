import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center flex-wrap py-6">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <div className="w-20 h-12 shrink-0 flex items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900">
            HOHAYA
          </Link>
        </div>
        <div className="flex flex-wrap">
          <ul className="flex flex-wrap bg-gray-800 text-gray-100 justify-center gap-4 lg:gap-6 pl-1 pr-4 py-1 items-center rounded-full text-sm lg:text-base">
            <li className="bg-white text-gray-900 py-2 px-4 hover:bg-gray-200 shadow-xl rounded-3xl"><Link to="/">Accueil</Link></li>
            <li><Link to="/properties" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">Propriétés</Link></li>
            <li><Link to="/about" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">À Propos</Link></li>
            <li className="hidden md:block"><a href="/#testimonials" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">Témoignages</a></li>
            <li className="hidden md:block"><a href="/#faq" className="bg-gray-800 py-2 px-4 rounded-3xl shadow-xl hover:bg-gray-100 hover:text-gray-900">FAQ</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="bg-gray-900 text-white hover:bg-gray-800 py-2.5 px-6 rounded-full text-sm lg:text-base font-semibold transition shadow-sm">
            Se Connecter
          </Link>
        </div>
      </div>
    </nav>
  );
}
