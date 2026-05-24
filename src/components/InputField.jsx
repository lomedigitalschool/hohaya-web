





export default function InputField({ label, id, type = "text", placeholder, value, onChange, onFocus, isFocused, error, icon}) {

  
  return (
    <div className='field-wrapper' >
      <label className='label' htmlFor={id} >{label}</label>
      <div className='input-wrap' >
        <span className='input-icon'>{icon}</span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className={`input ${isFocused ? "input-focus" : ""} ${error ?  "input-error" : ""}`}
          // autoComplete={id}
        />
      </div>
      {error && <p className='error-text'>{error}</p>}
    </div>
  );
}


