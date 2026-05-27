import { useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";
import useAuthStore from "../../stores/useAuthStore";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { loginSchema } from "../../schemas/auth.schema";
import { useForm } from "react-hook-form";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const [showPw, setShowPw] = useState(false);
  const [focused, setFocused] = useState(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: valibotResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleLogin = async (data) => {
    try {
      const res = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      // console.log (res.data)
      if (data.remember) {
        login(res.data);
      } else {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
      }
      setSuccess(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    // TODO: intégrer OAuth Google
    alert("Google OAuth — à connecter !");
  };

  return (
    <div className="container-login">
      <div className="card">
        <form onSubmit={handleSubmit(handleLogin)}>
        {!success ? (
          <>
            <h1 className="title">Connexion</h1>
            <p className="subtitle">
              Connectez-vous à votre compte pour continuer
            </p>
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


            <div className="row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  {...register("remember")}
                />
                Se souvenir de moi
              </label>
              <a href="#">
                Mot de passe oublié?
              </a>
            </div>

            <button
              className="btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "En cours…" : "Se connecter"}
            </button>

            <div className="divider">
              <hr className="divider-line" />
              <span className="divider-text">ou continuer avec</span>
              <hr className="divider-line" />
            </div>

            <button className="btn-google" onClick={handleGoogleLogin}>
              <GoogleIcon />
              Se connecter avec Google
            </button>

            <p className="signup-text">
              vous n'avez pas de compte?{" "}
              <Link to="/register" className="signup-link">
                Créer un compte
              </Link>
            </p>
          </>
        ) : (
          <div className="success-box">
            <div className="success-icon">✅</div>
            <p className="success-title">Connexion réussie!</p>
            <p className="success-sub">Redirection vers le tableau de bord…</p>
          </div>
        )}
        </form>
      </div>
    </div>
  );
}
