import { useState } from "react";

import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
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
              placeholder="email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => setFocused("email")}
              isFocused={focused === "email"}
              icon="✉"
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
              icon="🔒"
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
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="signup-link"
                onClick={(e) => e.preventDefault()}
              >
                Créer un compte
              </a>
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
