import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";

const UbicacionGeografica: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const noCodigoMalicioso = (value: string): boolean | string => {
    const regex = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  const campos = [
    { name: "latitude", label: "Latitud" },
    { name: "longitude", label: "Longitud" },
    { name: "altitude", label: "Altitud" },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
        Ubicación
      </h2>
      <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 mt-4">
        {campos.map(({ name, label }) => (
          <div key={name} className="w-full">
            <Input
              type="text"
              placeholder={label}
              {...register(name, {
                validate: {
                  noMaliciousCode: noCodigoMalicioso,
                  isValidNumber: (value) =>
                    !isNaN(Number(value)) || `${label} debe ser numérica`,
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
        ))}
      </div>
    </div>
  );
};

export default UbicacionGeografica;
