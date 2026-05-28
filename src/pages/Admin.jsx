const navItems = [
  { icon: "ti-smart-home", label: "Dashboard", active: true },
  { icon: "ti-users", label: "Customers" },
  { icon: "ti-bulb", label: "Solutions" },
  { icon: "ti-settings", label: "Settings" },
]

function Admin() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>

      <aside style={{ width: "220px", borderRight: "1px solid #f0f0f0", display: "flex", flexDirection: "column", padding: "28px 16px" }}>

        <div style={{ marginBottom: "36px" }}>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>boosto</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid #f0f0f0" }}></div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: "1" }}>
          {navItems.map(function(item) {
            return (
              <a key={item.label} href="#" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", borderRadius: "10px", fontSize: "14px", textDecoration: "none" }}>
                <i className={"ti " + item.icon}></i>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div style={{ height: "1px", backgroundColor: "#f0f0f0", margin: "12px 0" }}></div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", cursor: "pointer" }}>
          <i className="ti ti-logout"></i>
          Exit
        </div>

      </aside>

      <main style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>Contenu principal</p>
      </main>

    </div>
  )
}

export default Admin