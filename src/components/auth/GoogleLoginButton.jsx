import { GoogleLogin } from "@react-oauth/google";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";

export default function GoogleLoginButton() {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSuccess = async (resGoogle) => {
    const idToken = resGoogle.credential;

    const res = await api.post("/auth/google", {
      token: idToken,
    });
    const data = res.data;
    login({
      accessToken: data.token,
      refreshToken: data.refreshToken ?? null,
      user: data.user,
    });
    navigate("/dashboard");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Login failed")}
    />
  );
}
