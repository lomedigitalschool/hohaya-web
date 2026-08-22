import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";
import api from "../../services/Api";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProperty() {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get(`/properties/${id}`);
        if (!cancelled) {
          setProperty(res.data?.property ?? null);
        }
      } catch (err) {
        console.error("Load property error:", err);
        if (!cancelled) {
          setError("Impossible de charger cette propriété.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProperty();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className="scroll-smooth font-sans text-gray-900 antialiased overflow-x-hidden">
      <div className="bg-[#f8f9fa] px-6 lg:px-20 pb-16">
        <Navbar />

        <Link to="/properties" className="text-sm text-gray-500 hover:text-gray-900 transition">
          &larr; Retour aux propriétés
        </Link>

        {loading && <p className="text-gray-500 mt-10">Chargement…</p>}
        {error && <p className="text-red-600 mt-10">{error}</p>}
        {!loading && !error && !property && (
          <p className="text-gray-500 mt-10">Cette propriété est introuvable.</p>
        )}

        {!loading && property && (
          <div className="mt-8">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl h-80 lg:h-[480px] bg-gray-200 mb-10">
              {property.images?.[0] && (
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/3">
                <h1 className="text-4xl font-bold tracking-tight mb-4">{property.title}</h1>
                <p className="text-gray-500 mb-8">
                  {[property.location?.address, property.location?.district, property.location?.city]
                    .filter(Boolean)
                    .join(", ")}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <p className="font-black text-3xl text-gray-900 mb-6">
                    {property.price?.toLocaleString("fr-FR")} FCFA
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Type</span>
                      <span className="font-semibold capitalize">{property.type}</span>
                    </li>
                    {property.rooms && (
                      <li className="flex justify-between">
                        <span>Pièces</span>
                        <span className="font-semibold">{property.rooms}</span>
                      </li>
                    )}
                    <li className="flex justify-between">
                      <span>Statut</span>
                      <span className="font-semibold capitalize">{property.status}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
