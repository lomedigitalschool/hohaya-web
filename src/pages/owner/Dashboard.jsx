import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <p className="text-3xl font-black text-gray-900">{value}</p>
    </div>
  );
}

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProperties() {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get("/properties/owner/me");
        if (!cancelled) {
          setProperties(res.data?.properties ?? []);
        }
      } catch (err) {
        console.error("Load properties error:", err);
        if (!cancelled) {
          setError("Impossible de charger vos biens pour le moment.");
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

  const activeCount = properties.filter((p) => p.status === "active").length;
  const rentedOrSoldCount = properties.filter((p) =>
    ["rented", "sold"].includes(p.status),
  ).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-500 mt-1">Vue d'ensemble de vos biens</p>
        </div>
        <Link
          to="/dashboard/properties/new"
          className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          + Ajouter un bien
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard label="Biens publiés" value={properties.length} />
        <StatCard label="Actifs" value={activeCount} />
        <StatCard label="Loués / Vendus" value={rentedOrSoldCount} />
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-4">Mes biens</h2>

      {loading && <p className="text-gray-500">Chargement…</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && properties.length === 0 && (
        <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-gray-200">
          <p className="text-gray-500 mb-4">Vous n'avez pas encore publié de bien.</p>
          <Link
            to="/dashboard/properties/new"
            className="text-gray-900 font-semibold underline"
          >
            Publier votre premier bien
          </Link>
        </div>
      )}

      {!loading && properties.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="h-40 bg-gray-100">
                {property.images?.[0] && (
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1 truncate">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {property.location?.city}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-black text-gray-900">
                    {property.price?.toLocaleString("fr-FR")} FCFA
                  </p>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                    {property.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
