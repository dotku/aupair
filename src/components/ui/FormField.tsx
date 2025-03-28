import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  help?: string;
  error?: string;
  multiline?: boolean;
  options?: { value: string; label: string }[];
}

export function FormField({ label, help, error, multiline, options, ...props }: FormFieldProps) {
  const id = React.useId();

  const renderInput = () => {
    if (multiline) {
      return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} id={id} />;
    }
    if (options) {
      return (
        <select {...props as React.SelectHTMLAttributes<HTMLSelectElement>} id={id}>
          <option value="">{props['aria-label'] || '请选择'}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    }
    return <input {...props as React.InputHTMLAttributes<HTMLInputElement>} id={id} />;
  };

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {help && (
          <span className="text-xs text-gray-500">{help}</span>
        )}
      </div>
      {React.cloneElement(renderInput(), {
        className: `block w-full px-3 py-2 rounded-md border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-colors duration-200
          ${error ? 'border-red-300' : 'border-gray-300'}
          ${multiline ? 'min-h-[100px] resize-y' : 'h-9'}
          ${options ? 'appearance-none bg-white cursor-pointer pr-8' : ''}
          text-sm placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-500
        `
      })}
      {error && (
        <p className="mt-1.5 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

interface FormSubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function FormSubmitButton({ children, loading, ...props }: FormSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`
        inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
        ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-colors duration-200
      `}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
}
