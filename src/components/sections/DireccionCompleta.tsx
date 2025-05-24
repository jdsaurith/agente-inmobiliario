import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";

const DireccionCompleta: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const noCodigoMalicioso = (value: string): boolean | string => {
    const regex = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  const campos = [
    {
      name: "direccion",
      label: "Dirección",
      placeholder: "Ingrese la dirección",
    },
    { name: "barrio", label: "Barrio", placeholder: "Ingrese el barrio" },
    { name: "ciudad", label: "Ciudad", placeholder: "Ingrese la ciudad" },
  ];

  return (
    <div className="mt-10">
      {campos.map(({ name, label, placeholder }) => (
        <div key={name} className="mb-6">
          <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
            {label}
          </h2>
          <div className="mt-2">
            <Input
              type="text"
              placeholder={placeholder}
              {...register(name, {
                required: `${label} es requerida`,
                minLength: {
                  value: 2,
                  message: `${label} debe tener al menos 2 caracteres`,
                },
                validate: {
                  noMaliciousCode: noCodigoMalicioso,
                },
              })}
              className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ${
                errors[name]
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300 dark:ring-gray-600 focus:ring-indigo-600"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
            />
            {errors[name] && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors[name]?.message as string}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DireccionCompleta;
