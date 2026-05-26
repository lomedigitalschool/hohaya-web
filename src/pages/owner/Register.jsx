import { useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";
import useAuthStore from "../../stores/useAuthStore";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { registerSchema } from "../../schemas/auth.schema";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: valibotResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      role: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
    },
  });
  const login = useAuthStore((state) => state.login);
  const [focused, setFocused] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

  const handleRegister = async (data) => {

    try {
      const res = await api.post("/auth/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        role: data.role,
        phoneNumber: data.phoneNumber,
        location: data.location
      });
      if (data.remember) {
        login(res.data);
      } else {
        sessionStorage.setItem("token", res.data.accesToken);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("refreshToken", res.data.refreshToken);
      }
      setSuccess(true);
    } catch (error) {
      console.error("Register error:", error);
    } finally {
    }
  };

  const handleGoogleRegister = (e) => {
    e.preventDefault();
    // TODO: intégrer OAuth Google
    alert("Google OAuth — à connecter !");
  };

  return (
    <div className="container-login">
      <div className="card">
        <form onSubmit={handleSubmit(handleRegister)}>
          {!success ? (
            <>
              <h1 className="title">Créer un compte</h1>
              <p className="subtitle">
                Commencez votre aventure — c'est gratuit
              </p>

              <button className="btn-google" onClick={handleGoogleRegister}>
                <GoogleIcon />
                S'inscrire avec Google
              </button>
              <div className="divider">
                <hr className="divider-line" />
                <span className="divider-text">Ou créer avec Email</span>
                <hr className="divider-line" />
              </div>

              {/* Prénom + Nom */}
              <div className="row-fields">
                <InputField
                  {...register("firstName")}
                  label="Prénom"
                  id="firstName"
                  placeholder="Votre prénom"
                  onFocus={() => setFocused("firstName")}
                  isFocused={focused === "firstName"}
                  error={errors.firstName?.message || null}
                />
                <InputField
                  {...register("lastName")}
                  label="Nom"
                  id="lastName"
                  placeholder="Votre nom"
                  onFocus={() => setFocused("lastName")}
                  isFocused={focused === "lastName"}
                  error={errors.lastName?.message || null}
                />
              </div>
              <div className="row-fields">
                <InputField
                  {...register("phoneNumber")}
                  label="Tel"
                  id="phoneNumber"
                  placeholder="numéro de téléphone"
                  onFocus={() => setFocused("phoneNumber")}
                  isFocused={focused === "phoneNumber"}
                  error={errors.phoneNumber?.message || null}
                />
                <InputField
                  {...register("location")}
                  label="Localisation"
                  id="location"
                  placeholder="Votre localisation"
                  onFocus={() => setFocused("location")}
                  isFocused={focused === "location"}
                  error={errors.location?.message || null}
                />
                <InputField
                  {...register("role")}
                  label="Rôle"
                  id="role"
                  placeholder="Votre rôle"
                  onFocus={() => setFocused("role")}
                  isFocused={focused === "role"}
                  error={errors.role?.message || null}
                />
              </div>
              

              {/* Email */}
              <InputField
                {...register("email")}
                label="Email"
                id="email"
                type="email"
                placeholder="email@example.com"
                onFocus={() => setFocused("email")}
                isFocused={focused === "email"}
                error={errors.email?.message || null}
              />

              {/* Password */}
              <InputField
                {...register("password")}
                label="Mot de passe"
                id="password"
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                onFocus={() => setFocused("password")}
                isFocused={focused === "password"}
                error={errors.password?.message || null}
              />

              {/* Confirm Password */}
              <InputField
                {...register("confirmPassword")}
                label="Confirmer le mot de passe"
                id="confirmPassword"
                type={showConfirmPw ? "text" : "password"}
                placeholder="••••••••"
                onFocus={() => setFocused("confirmPassword")}
                isFocused={focused === "confirmPassword"}
                error={errors.confirmPassword?.message || null}
              />

              {/* Submit */}
              <button
                className="btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Création en cours…" : "Créer un compte"}
              </button>

              <p className="signup-text">
                Vous avez déjà un compte?{" "}
                <Link className="signup-link" to="/login">
                  {" "}
                  Se connecter
                </Link>
              </p>
            </>
          ) : (
            <div className="success-box">
              <div className="success-icon">🎉</div>
              <p className="success-title">Compte créé avec succès!</p>
              <p className="success-sub">
                Vérifiez votre email pour activer votre compte.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
