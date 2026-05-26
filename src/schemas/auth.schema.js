import {
  object,
  string,
  boolean,
  optional,
  minLength,
  email,
  trim,
  check,
} from "valibot";

export const loginSchema = object({
  email: string([email("Email invalide")]),
  password: string([minLength(6, "Mot de passe requis")]),
});


export const registerSchema = object({
  firstName: string([
    trim(),
    minLength(1, "Le prénom est requis"),
  ]),

  lastName: string([
    trim(),
    minLength(1, "Le nom est requis"),
  ]),
  phoneNumber: string([
    trim(),
     minLength(1, "Le numero de tel est requis"),
  ]),

  role:string([
    trim(),
    minLength(1, "Le role est requis"),
  ]),
  location: string ([
    trim()
  ]),

  email: string([
    trim(),
    email("Email invalide"),
  ]),

  password: string([
    minLength(6, "Minimum 6 caractères"),
  ]),

  confirmPassword: string(),

  remember: optional(boolean()),
},
  check((data) => data.password === data.confirmPassword, "Les mots de passe ne correspondent pas")
);