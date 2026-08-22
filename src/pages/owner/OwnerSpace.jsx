import { NavLink, Outlet } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import LogoutButton from "../../components/auth/Logout";

const navItems = [
  { to: "/dashboard", label: "Tableau de bord", end: true },
  { to: "/dashboard/properties/new", label: "Ajouter un bien" },
  { to: "/dashboard/profil", label: "Profil" },
  { to: "/dashboard/settings", label: "Paramètres" },
];

function linkClass({ isActive }) {
  return `block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
    isActive
      ? "bg-gray-900 text-white"
      : "text-gray-600 hover:bg-gray-100"
  }`;
}

export default function OwnerSpace() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 shrink-0 border-r border-gray-100 bg-white flex flex-col p-6">
        <a href="/" className="text-2xl font-black tracking-tighter text-gray-900 mb-10">
          HOHAYA
        </a>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-100 pt-4 mt-4">
          {user && (
            <p className="text-sm text-gray-500 mb-3 truncate">
              {user.email || `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()}
            </p>
          )}
          <LogoutButton />
        </div>
      </aside>

      <main className="flex-1 p-8 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}
