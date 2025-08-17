import React from 'react';

const TextArea = ({
  value,
  onChange,
  placeholder,
  readOnly = false,
  className = '',
  label,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xl font-semibold text-white mb-4">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full h-40 p-4 bg-black/30 border border-gray-600 rounded-2xl text-white placeholder-gray-400 resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextArea;