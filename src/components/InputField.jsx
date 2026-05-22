
import {styles} from './styles'





export default function InputField({ label, id, type = "text", placeholder, value, onChange, onFocus, isFocused, error, icon}) {
  return (
    <div style={styles.fieldWrapper}>
      <label htmlFor={id} style={styles.label}>{label}</label>
      <div style={styles.inputWrap}>
        <span style={styles.inputIcon}>{icon}</span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
         
          style={{
            ...styles.input,
            ...(isFocused ? styles.inputFocus : {}),
            ...(error ? { borderColor: "#e53e3e" } : {}),
          }}
          autoComplete={id}
        />
      </div>
      {error && <p style={styles.errorText}>{error}</p>}
    </div>
  );
}


