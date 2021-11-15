import React, { useState } from "react";

const FileInput = React.forwardRef(
  ({ label, onChange, onBlur, name, errors, disabled }, ref) => {
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
      const _file = e.target.files[0];
      setFile(_file);
      onChange(e);
    };

    return (
      <>
        <label className="mt-4 mb-2" htmlFor={label}>
          {label}
        </label>
        <div className="relative mt-4 mb-4 overflow-hidden">
          <input
            type="file"
            multiple={false}
            className="absolute block w-full h-full opacity-0 cursor-pointer hover:bg-blue-100"
            disabled={disabled}
            ref={ref}
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <button
            disabled={disabled}
            className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700"
          >
            <span>Subir imagen</span>
          </button>
          {/* <p className="text-sm font-semibold text-red-500">
            {errors && errors?.message}
          </p> */}
        </div>
        {file && (
          <div className="mt-2 mr-2">
            <span className="text-sm text-gray-600">
              {`${file.name} (${Math.round(file.size / 1024)} KB)`}
            </span>
          </div>
        )}
      </>
    );
  }
);

FileInput.displayName = "Select";

export default FileInput;
