import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
    >
      Déconnexion
    </button>
  );
}