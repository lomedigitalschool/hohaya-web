import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/Api";
import InputField from "../../components/InputField";

export default function AddProperty() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      type: "apartment",
      price: "",
      rooms: "",
      city: "",
      district: "",
      address: "",
    },
  });

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      await api.post("/properties", {
        title: data.title,
        description: data.description,
        type: data.type,
        price: Number(data.price),
        rooms: data.rooms ? Number(data.rooms) : undefined,
        location: {
          city: data.city,
          district: data.district,
          address: data.address,
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Add property error:", error);
      setServerError("La publication du bien a échoué. Réessayez.");
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Ajouter un bien</h1>
      <p className="text-gray-500 mb-8">
        Renseignez les informations de votre annonce
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
      >
        <InputField
          {...register("title", { required: "Le titre est requis" })}
          label="Titre de l'annonce"
          id="title"
          placeholder="Villa moderne avec piscine"
          error={errors.title?.message}
        />

        <div className="field-wrapper">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description", { required: "La description est requise" })}
            placeholder="Décrivez le bien, ses équipements, son emplacement…"
            className="input"
          />
          {errors.description && (
            <p className="error-text">{errors.description.message}</p>
          )}
        </div>

        <div className="row-fields">
          <div className="field-wrapper flex-1">
            <label className="label" htmlFor="type">
              Type de bien
            </label>
            <select id="type" {...register("type")} className="input">
              <option value="apartment">Appartement</option>
              <option value="house">Maison</option>
              <option value="room">Chambre</option>
              <option value="land">Terrain</option>
            </select>
          </div>

          <InputField
            {...register("price", { required: "Le prix est requis" })}
            label="Prix (FCFA)"
            id="price"
            type="number"
            placeholder="150000000"
            error={errors.price?.message}
          />
        </div>

        <InputField
          {...register("rooms")}
          label="Nombre de pièces (optionnel)"
          id="rooms"
          type="number"
          placeholder="4"
          error={errors.rooms?.message}
        />

        <div className="row-fields">
          <InputField
            {...register("city", { required: "La ville est requise" })}
            label="Ville"
            id="city"
            placeholder="Lomé"
            error={errors.city?.message}
          />
          <InputField
            {...register("district")}
            label="Quartier"
            id="district"
            placeholder="Tokoin"
            error={errors.district?.message}
          />
        </div>

        <InputField
          {...register("address")}
          label="Adresse"
          id="address"
          placeholder="Boulevard du 13 Janvier"
          error={errors.address?.message}
        />

        {serverError && <p className="error-text">{serverError}</p>}

        <button className="btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publication…" : "Publier le bien"}
        </button>
      </form>
    </div>
  );
}
