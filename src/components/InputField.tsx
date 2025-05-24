// components/InputField.tsx
type InputFieldProps = {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="mt-4">
      <label className="text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
