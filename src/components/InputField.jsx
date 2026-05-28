
import { forwardRef } from "react";





const InputField = forwardRef(
  (
    {
      label,
      id,
      type = "text",
      placeholder,
      onFocus,
      isFocused,
      error,
      icon,
      ...rest
    },
    ref
  ) => {
  
  return (
    <div className='field-wrapper' >
      <label className='label' htmlFor={id} >{label}</label>
      <div className='input-wrap' >
        <span className='input-icon'>{icon}</span>
        <input
          id={id}
          ref={ref}
           {...rest}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          className={`input ${isFocused ? "input-focus" : ""} ${error ?  "input-error" : ""}`}
          // autoComplete={id}
        />
      </div>
      {error && <p className='error-text'>{error}</p>}
    </div>
  );
}
)

export default InputField;


