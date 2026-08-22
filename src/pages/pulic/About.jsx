import Navbar from '../../components/public/Navbar';
import Footer from '../../components/public/Footer';

export default function About() {
  return (
    <div className="scroll-smooth font-sans text-gray-900 antialiased overflow-x-hidden">
      <div className="bg-[#f8f9fa] px-6 lg:px-20 pb-16">
        <Navbar />

        <section className="py-10 lg:py-16">
          <p className="inline-flex text-gray-900 items-center bg-white py-1.5 px-5 text-sm rounded-full font-medium shadow-sm mb-6">
            À Propos
          </p>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 mb-6">
            Une Aide Immobilière <br className="hidden lg:block" /> Sur Mesure Pour Tous.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Hohaya accompagne propriétaires et investisseurs à Lomé et dans tout le
            Togo pour publier, gérer et suivre leurs biens immobiliers en toute
            simplicité. Forts de plusieurs années d'expérience sur le marché
            immobilier local, nous mettons notre expertise au service de votre
            réussite.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-16">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Simplicité</h2>
            <p className="text-gray-500">
              Publiez vos annonces en quelques minutes depuis votre espace propriétaire.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Transparence</h2>
            <p className="text-gray-500">
              Suivez l'état de vos biens et vos échanges avec les futurs locataires ou acheteurs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Proximité</h2>
            <p className="text-gray-500">
              Une équipe basée à Lomé, à l'écoute des propriétaires togolais.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
