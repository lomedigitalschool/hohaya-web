import { useEffect, useState } from "react";
import api from "../../services/Api";
import useAuthStore from "../../stores/useAuthStore";
import InputField from "../../components/InputField";

export default function Profil() {
  const storedUser = useAuthStore((s) => s.user);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      setLoading(true);
      try {
        const res = await api.get("/users/me");
        const user = res.data?.user;
        if (!cancelled && user && Object.keys(user).length > 0) {
          setForm({
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
            email: user.email ?? "",
            phoneNumber: user.phoneNumber ?? "",
            city: user.location?.city ?? "",
          });
        } else if (!cancelled && storedUser) {
          setForm((f) => ({ ...f, email: storedUser.email ?? "" }));
        }
      } catch (err) {
        console.error("Load profile error:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadProfile();
    return () => {
      cancelled = true;
    };
  }, [storedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);
    try {
      await api.put("/users/me", {
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNumber: form.phoneNumber,
        location: { city: form.city },
      });
      setMessage({ type: "success", text: "Profil mis à jour." });
    } catch (err) {
      console.error("Update profile error:", err);
      setMessage({ type: "error", text: "La mise à jour a échoué." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Chargement du profil…</p>;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Mon profil</h1>
      <p className="text-gray-500 mb-8">Gérez vos informations personnelles</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
      >
        <div className="row-fields">
          <InputField
            label="Prénom"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <InputField
            label="Nom"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={form.email}
          disabled
          onChange={() => {}}
        />

        <InputField
          label="Téléphone"
          id="phoneNumber"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
        />

        <InputField
          label="Ville"
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        {message && (
          <p className={message.type === "error" ? "error-text" : "text-sm text-green-600"}>
            {message.text}
          </p>
        )}

        <button className="btn-primary" type="submit" disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer"}
        </button>
      </form>
    </div>
  );
}
