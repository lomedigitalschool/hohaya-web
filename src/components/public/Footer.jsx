export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="px-6 lg:px-20 mb-12 flex flex-col lg:flex-row justify-between gap-10">
        <div className="w-full lg:w-1/3">
          <a href="#" className="text-3xl font-black tracking-tighter text-gray-900 mb-6 block">
            HOHAYA.
          </a>
          <p className="text-gray-500 leading-relaxed max-w-sm">
            Nous offrons un service complet pour la vente, l'achat ou la location de biens immobiliers. Nous opérons depuis plus de 10 ans.
          </p>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Entreprise</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">À Propos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Nos Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Carrières</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Liens Rapides</h3>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">Rechercher des Propriétés</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Vendre votre Maison</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Rapports de Marché</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Agents</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-2">
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                Boulevard du 13 Janvier, Tokoin, Lomé, Togo
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">✉️</span>
                hello@hohaya.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                +228 22 21 01 20 / +228 90 05 55 01
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-medium">© 2026 Hohaya. Tous droits réservés.</p>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition">Politique de Confidentialité</a>
          <a href="#" className="hover:text-gray-900 transition">Conditions d'Utilisation</a>
          <a href="#" className="hover:text-gray-900 transition">Paramètres des Cookies</a>
        </div>
      </div>
    </footer>
  );
}
