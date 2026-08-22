import { useState, useEffect } from "react";
import api from "../../services/Api";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import GoogleLoginButton from "../../components/auth/GoogleLoginButton";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { registerSchema } from "../../schemas/auth.schema";
import { useForm, Controller } from "react-hook-form";
import { searchLocation } from "../../services/locationNominatimApi";

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: valibotResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      role: "owner",
      location: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
    },
  });
  const navigate = useNavigate();
  const [focused, setFocused] = useState(null);
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const watchLocation = watch("location");

  // Recherche de localisation
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const results = await searchLocation(watchLocation);
        setSuggestions(results);
        console.log(results);
      } catch (err) {
        console.error(err);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [watchLocation]);

  const handleRegister = async (data) => {
    // console.log(data)

    try {
      await api.post("/auth/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        role: data.role,
        phoneNumber: data.phoneNumber,
        location: { city: data.location },
      });
      // L'inscription ne renvoie pas de session : on redirige vers la connexion.
      navigate("/login");
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <div className="container-login">
      <div className="card">
        <form onSubmit={handleSubmit(handleRegister)}>
          <>
            <h1 className="title">Créer un compte</h1>
            <p className="subtitle">Commencez votre aventure — c'est gratuit</p>
            <GoogleLoginButton />
            
            <div className="divider">
              <hr className="divider-line" />
              <span className="divider-text">Ou créer avec Email</span>
              <hr className="divider-line" />
            </div>

            {/* Prénom + Nom */}
            <div className="row-fields">
              <InputField
                {...register("firstName")}
                label="Prénom :"
                id="firstName"
                placeholder="Votre prénom"
                onFocus={() => setFocused("firstName")}
                isFocused={focused === "firstName"}
                error={errors.firstName?.message || null}
              />
              <InputField
                {...register("lastName")}
                label="Nom :"
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
                label="Tel :"
                id="phoneNumber"
                placeholder="Numéro de téléphone"
                onFocus={() => setFocused("phoneNumber")}
                isFocused={focused === "phoneNumber"}
                error={errors.phoneNumber?.message || null}
              />
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <InputField
                      {...field}
                      label="location:"
                      id="location"
                      placeholder="Votre ville"
                      onFocus={() => setFocused("location")}
                      isFocused={focused === "location"}
                      error={errors.location?.message || null}
                      onChange={(e) => {
                        field.onChange(e); // update react-hook-form state
                      }}
                    />
                    {suggestions.length > 0 && (
                      <ul className="absolute max-w-40 z-20 bg-white border w-full">
                        {suggestions.map((item ,index) => (
                          <li
                            key={index}
                            onClick={() => {
                              field.onChange(item.city); // update react-hook-form state
                              setSuggestions([]);
                              console.log(item.city);
                            }}
                            className="p-2 cursor-pointer hover:bg-gray-100"
                          >
                            {item.city}, {item.country}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Email */}
            <InputField
              {...register("email")}
              label="Email :"
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
              label="Mot de passe :"
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
              label="Confirmer le mot de passe :"
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
        </form>
      </div>
    </div>
  );
}
