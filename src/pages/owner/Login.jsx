import { useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";
import useAuthStore from "../../stores/useAuthStore";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      // console.log (res.data)
      // console.log(accessToken)
      // console.log(refreshToken)
      if (remember) {
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
        {!success ? (
          <>
            <h1 className="title">Connexion</h1>
            <p className="subtitle">
              Connectez-vous à votre compte pour continuer
            </p>

            <InputField
              label="Email"
              id="email"
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => setFocused("email")}
              isFocused={focused === "email"}
            />

            <InputField
              label="Password"
              id="password"
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => setFocused("password")}
              isFocused={focused === "password"}
            />

            <div className="row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Se souvenir de moi
              </label>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Mot de passe oublié?
              </a>
            </div>

            <button
              className="btn-primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "En cours…" : "Se connecter"}
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
      </div>
    </div>
  );
}
