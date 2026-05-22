import GoogleIcon from "../../components/GoogleIcon";
import InputField from "../../components/InputField";


export default function LoginScreen() {
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
    <div style={styles.container}>
      <div style={styles.card}>
        {!success ? (
          <>
            <h1 style={styles.title}>Welcome back</h1>
            <p style={styles.subtitle}>Sign in to your account to continue</p>

            <InputField
              label="Email"
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
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
              onChange={(e) => { setPassword(e.target.value); }}
              onFocus={() => setFocused("password")}
              isFocused={focused === "password"}
              
              
            />

            <div style={styles.row}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={styles.checkbox}
                />
                Remember me
              </label>
              <a href="#" style={styles.forgotLink} onClick={(e) => e.preventDefault()}>
                Forgot password?
              </a>
            </div>

            <button
              style={{
                ...styles.btnPrimary,
                ...(loading ? styles.btnPrimaryDisabled : {}),
              }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>

            <div style={styles.divider}>
              <hr style={styles.dividerLine} />
              <span style={styles.dividerText}>or continue with</span>
              <hr style={styles.dividerLine} />
            </div>

            <button style={styles.btnGoogle} onClick={handleGoogleLogin}>
              <GoogleIcon />
              Sign in with Google
            </button>

            <p style={styles.signupText}>
              Don&apos;t have an account?{" "}
              <a href="#" style={styles.signupLink} onClick={(e) => e.preventDefault()}>
                Create one
              </a>
            </p>
          </>
        ) : (
          <div style={styles.successBox}>
            <div style={styles.successIcon}>✅</div>
            <p style={styles.successTitle}>Signed in successfully!</p>
            <p style={styles.successSub}>Redirecting you to dashboard…</p>
          </div>
        )}
      </div>
    </div>
  );
}