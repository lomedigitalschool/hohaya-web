import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";
import api from "../../services/Api";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProperties() {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get("/properties");
        if (!cancelled) {
          setProperties(res.data?.properties ?? []);
        }
      } catch (err) {
        console.error("Load properties error:", err);
        if (!cancelled) {
          setError("Impossible de charger les propriétés pour le moment.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProperties();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="scroll-smooth font-sans text-gray-900 antialiased overflow-x-hidden">
      <div className="bg-[#f8f9fa] px-6 lg:px-20 pb-16">
        <Navbar />

        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          Toutes les propriétés
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Parcourez l'ensemble des biens actuellement disponibles.
        </p>

        {loading && <p className="text-gray-500">Chargement…</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && properties.length === 0 && (
          <p className="text-gray-500">Aucune propriété disponible pour le moment.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <Link key={prop._id} to={`/properties/${prop._id}`} className="group">
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm bg-gray-200 h-72">
                {prop.images?.[0] && (
                  <img
                    src={prop.images[0]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    alt={prop.title}
                  />
                )}
              </div>
              <div className="px-2">
                <h2 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition">
                  {prop.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {prop.location?.city}
                </p>
                <p className="font-black text-2xl text-gray-900">
                  {prop.price?.toLocaleString("fr-FR")} FCFA
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
