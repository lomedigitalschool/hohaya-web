import { useState } from "react"
import Dashboard from "../components/sections/Dashboard"
import Customers from "../components/sections/Customers"
import Solutions from "../components/sections/Solutions"
import Settings from "../components/sections/Settings"

function Admin() {
  const [activePage, setActivePage] = useState("Dashboard")

  const navItems = [
    { icon: "ti-smart-home", label: "Dashboard" },
    { icon: "ti-users", label: "Customers" },
    { icon: "ti-bulb", label: "Solutions" },
    { icon: "ti-settings", label: "Settings" },
  ]

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <aside style={{ width: "240px", borderRight: "1px solid #f0f0f0", display: "flex", flexDirection: "column", padding: "28px 16px" }}>

        <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1" }}>
          {navItems.map(function(item) {
            return (
              <button
                key={item.label}
                onClick={function() { setActivePage(item.label) }}
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "10px", fontSize: "14px", border: "none", background: "transparent", cursor: "pointer", textAlign: "left", fontWeight: activePage === item.label ? "bold" : "normal" }}
              >
                <i className={"ti " + item.icon} style={{ fontSize: "18px" }}></i>
                {item.label}
              </button>
            )
          })}
        </nav>

        <div style={{ height: "1px", backgroundColor: "#f0f0f0", margin: "12px 0" }}></div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", cursor: "pointer" }}>
          <i className="ti ti-logout" style={{ fontSize: "18px" }}></i>
          Exit
        </div>

      </aside>

      <main style={{ flex: "1" }}>
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Customers" && <Customers />}
        {activePage === "Solutions" && <Solutions />}
        {activePage === "Settings" && <Settings />}
      </main>

    </div>
  )
}

export default Admin