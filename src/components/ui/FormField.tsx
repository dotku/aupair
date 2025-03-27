import React from 'react';

interface FormFieldProps {
  label: string;
  help?: string;
  error?: string;
  required?: boolean;
  children: React.ReactElement;
}

export function FormField({ label, help, error, required, children }: FormFieldProps) {
  const id = React.useId();
  const child = React.Children.only(children);

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {help && (
          <span className="text-xs text-gray-500">{help}</span>
        )}
      </div>
      {React.cloneElement(child, {
        id,
        className: `block w-full px-3 py-2 rounded-md border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-colors duration-200
          ${error ? 'border-red-300' : 'border-gray-300'}
          ${child.type === 'textarea' ? 'min-h-[100px] resize-y' : 'h-9'}
          ${child.type === 'select' ? 'bg-white' : ''}
          text-sm placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-500
        `
      })}
      {error && (
        <p className="mt-1.5 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

export function FormSelect({ options, ...props }: FormSelectProps) {
  return (
    <select {...props} className={`${props.className} appearance-none bg-white cursor-pointer pr-8`}>
      <option value="">{props['aria-label'] || '请选择'}</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export function FormSubmitButton({ children, loading, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex justify-center items-center h-9 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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
