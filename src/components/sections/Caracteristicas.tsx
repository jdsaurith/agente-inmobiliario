import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";

const Caracteristicas: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const campos = [
    { name: "ambientes", label: "Ambientes", placeholder: "Ambientes" },
    { name: "dormitorios", label: "Dormitorios", placeholder: "Dormitorios" },
    { name: "banios", label: "Baños", placeholder: "Baños" },
    { name: "toilet", label: "Toilet", placeholder: "Toilet" },
    { name: "expensas", label: "Expensas", placeholder: "Expensas" },
    { name: "area", label: "Área (m²)", placeholder: "Área (m²)" },
    {
      name: "areaTotal",
      label: "Área Total (m²)",
      placeholder: "Área Total (m²)",
    },
  ];

  const esNumeroPositivo = (value: string) =>
    /^\d+(\.\d+)?$/.test(value) || "Debe ser un número válido";

  return (
    <div className="mt-10">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
        Características
      </h2>

      <div className="flex flex-col gap-6 mt-4">
        {campos.map(({ name, label, placeholder }) => (
          <div key={name}>
            <label className="text-sm/6 font-semibold text-gray-900 dark:text-white">
              {label}
            </label>
            <Input
              type="text"
              placeholder={placeholder}
              {...register(name, {
                validate: esNumeroPositivo,
              })}
              className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ${
                errors[name]
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300 dark:ring-gray-600 focus:ring-indigo-600"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
            />
            {errors[name] && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors[name]?.message as string}
              </p>
            )}
          </div>
        ))}

        {/* Checkbox ¿Es interno? */}
        <div className="flex items-center gap-2">
          <input
            id="interno"
            type="checkbox"
            {...register("esInterno")}
            className="h-4 w-4 rounded border-gray-300 bg-white dark:bg-gray-800 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="interno"
            className="text-sm text-gray-900 dark:text-white"
          >
            ¿Es interno?
          </label>
        </div>

        {/* Checkbox ¿Es luminoso? */}
        <div className="flex items-center gap-2">
          <input
            id="luminoso"
            type="checkbox"
            {...register("esLuminoso")}
            className="h-4 w-4 rounded border-gray-300 bg-white dark:bg-gray-800 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="luminoso"
            className="text-sm text-gray-900 dark:text-white"
          >
            ¿Es luminoso?
          </label>
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
