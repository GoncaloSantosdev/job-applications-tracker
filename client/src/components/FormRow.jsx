/* eslint-disable react/prop-types */
const FormRow = ({ type, name, label, placeholder, defaultValue }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-black"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full border rounded px-4 py-2 text-sm"
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};

export default FormRow;
