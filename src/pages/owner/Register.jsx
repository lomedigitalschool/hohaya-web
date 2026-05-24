import { useState } from "react";
import api from '../../services/Api';
import { Link } from "react-router-dom";
import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";

function getPasswordStrength(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw) && /[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthLabels = ["", "Faible", "Moyen", "Fort"];
const strengthColors = ["", "#e53e3e", "#f6ad55", "#48bb78"];

export default function Register({ onLoginClick }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const strength = getPasswordStrength(form.password);

  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "Le prénom est requis.";
    if (!form.lastName.trim()) errs.lastName = "Le nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Email invalide.";
    if (form.password.length < 6) errs.password = "Minimum 6 caractères.";
    if (form.confirmPassword !== form.password) errs.confirmPassword = "Les mots de passe ne correspondent pas.";
    if (!terms) errs.terms = "Vous devez accepter les conditions.";
    return errs;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      });
      setSuccess(true);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("Register error:", error);
      setErrors({ email: "Un compte existe déjà avec cet email." });
    } finally {
      setLoading(false);
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
        {!success ? (
          <>
            <h1 className="title">Créer un compte</h1>
            <p className="subtitle">Commencez votre aventure — c'est gratuit</p>
           

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
                label="Prénom"
                id="firstName"
                placeholder="Votre prénom"
                value={form.firstName}
                onChange={update("firstName")}
                onFocus={() => setFocused("firstName")}
                isFocused={focused === "firstName"}
                error={errors.firstName}
                
              />
              <InputField
                label="Nom"
                id="lastName"
                placeholder="Votre nom"
                value={form.lastName}
                onChange={update("lastName")}
                onFocus={() => setFocused("lastName")}
                isFocused={focused === "lastName"}
                error={errors.lastName}
                
              />
            </div>

            {/* Email */}
            <InputField
              label="Email"
              id="email"
              type="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={update("email")}
              onFocus={() => setFocused("email")}
              isFocused={focused === "email"}
              error={errors.email}
              
            />

            {/* Password */}
            <InputField
              label="Mot de passe"
              id="password"
              type={showPw ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={update("password")}
              onFocus={() => setFocused("password")}
              isFocused={focused === "password"}
              error={errors.password}
            />

            {/* Barre de force */}
            {form.password && (
              <div className="strength-bar">
                <div className="strength-track">
                  <div
                    className="strength-fill"
                    style={{
                      width: strength === 0 ? "0%" : strength === 1 ? "33%" : strength === 2 ? "66%" : "100%",
                      background: strengthColors[strength],
                    }}
                  />
                </div>
                <span className="strength-label" style={{ color: strengthColors[strength] }}>
                  {strengthLabels[strength]}
                </span>
              </div>
            )}

            {/* Confirm Password */}
            <InputField
              label="Confirmer le mot de passe"
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={update("confirmPassword")}
              onFocus={() => setFocused("confirmPassword")}
              isFocused={focused === "confirmPassword"}
              error={errors.confirmPassword}
            />

            {/* Submit */}
            <button
              className="btn-primary"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Création en cours…" : "Créer un compte"}
            </button>

            

            <p className="signup-text" >
              Vous avez déjà un compte?{" "}
              <Link className="signup-link" to="/login"> Se connecter</Link>
            </p>
          </>
        ) : (
          <div className="success-box">
            <div className="success-icon">🎉</div>
            <p className="success-title">Compte créé avec succès!</p>
            <p className="success-sub">Vérifiez votre email pour activer votre compte.</p>
          </div>
        )}
      </div>
    </div>
  );
}