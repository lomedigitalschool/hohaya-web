import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/Api";
import InputField from "../../components/InputField";

export default function Setting() {
  const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setMessage(null);
    if (data.newPassword !== data.confirmPassword) {
      setMessage({ type: "error", text: "Les mots de passe ne correspondent pas." });
      return;
    }
    try {
      await api.put("/users/me/password", {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      setMessage({ type: "success", text: "Mot de passe mis à jour." });
      reset();
    } catch (err) {
      console.error("Change password error:", err);
      setMessage({ type: "error", text: "Le changement de mot de passe a échoué." });
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Paramètres</h1>
      <p className="text-gray-500 mb-8">Gérez la sécurité de votre compte</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4"
      >
        <h2 className="font-bold text-gray-900 mb-2">Changer le mot de passe</h2>

        <InputField
          {...register("currentPassword", { required: "Requis" })}
          label="Mot de passe actuel"
          id="currentPassword"
          type="password"
          error={errors.currentPassword?.message}
        />
        <InputField
          {...register("newPassword", {
            required: "Requis",
            minLength: { value: 6, message: "Minimum 6 caractères" },
          })}
          label="Nouveau mot de passe"
          id="newPassword"
          type="password"
          error={errors.newPassword?.message}
        />
        <InputField
          {...register("confirmPassword", { required: "Requis" })}
          label="Confirmer le nouveau mot de passe"
          id="confirmPassword"
          type="password"
          error={errors.confirmPassword?.message}
        />

        {message && (
          <p className={message.type === "error" ? "error-text" : "text-sm text-green-600"}>
            {message.text}
          </p>
        )}

        <button className="btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Mise à jour…" : "Mettre à jour"}
        </button>
      </form>
    </div>
  );
}
