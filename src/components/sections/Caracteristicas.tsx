import React from "react";
import { useFormContext } from "react-hook-form";
import type { FieldError } from "react-hook-form";
import { Input } from "@/components/ui/Input"; // Asegúrate que la ruta sea correcta

// Define un tipo para los nombres de campo para mejorar la seguridad de tipos
type CaracteristicasFieldName =
  | "ambientes"
  | "dormitorios"
  | "banios"
  | "toilet"
  | "expensas"
  | "area"
  | "areaTotal"
  | "antiguedad";

interface CampoCaracteristica {
  name: CaracteristicasFieldName;
  label: string;
  placeholder: string;
  isOptional: boolean; // Nuevo flag para determinar la validación
}

const Caracteristicas: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const campos: CampoCaracteristica[] = [
    {
      name: "ambientes",
      label: "Ambientes",
      placeholder: "Ej: 3",
      isOptional: false,
    },
    {
      name: "dormitorios",
      label: "Dormitorios",
      placeholder: "Ej: 2",
      isOptional: true,
    },
    { name: "banios", label: "Baños", placeholder: "Ej: 1", isOptional: true },
    { name: "toilet", label: "Toilet", placeholder: "Ej: 1", isOptional: true },
    {
      name: "expensas",
      label: "Expensas",
      placeholder: "Ej: 15000",
      isOptional: true,
    },
    {
      name: "area",
      label: "Área Cubierta (m²)",
      placeholder: "Ej: 70",
      isOptional: false,
    },
    {
      name: "areaTotal",
      label: "Área Total (m²)",
      placeholder: "Ej: 75",
      isOptional: true,
    },
    {
      name: "antiguedad",
      label: "Antigüedad (años)",
      placeholder: "Ej: 5",
      isOptional: true,
    },
  ];

  // Validación para campos requeridos que deben ser números no negativos (0 es permitido)
  const validateRequiredNonNegative = (value: string): string | boolean => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return "Este campo es requerido.";
    }
    // Regex para números no negativos (enteros o decimales)
    // Permite "0", "123", "0.5", "123.45"
    if (
      !/^\d*\.?\d+$/.test(trimmedValue) ||
      isNaN(parseFloat(trimmedValue)) ||
      parseFloat(trimmedValue) < 0
    ) {
      return "Debe ser un número positivo o cero.";
    }
    return true;
  };

  // Validación para campos opcionales: si se ingresa algo, debe ser un número no negativo
  const validateOptionalNonNegative = (value: string): string | boolean => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      return true; // Vacío es válido
    }
    if (
      !/^\d*\.?\d+$/.test(trimmedValue) ||
      isNaN(parseFloat(trimmedValue)) ||
      parseFloat(trimmedValue) < 0
    ) {
      return "Debe ser un número positivo o cero (si se ingresa un valor).";
    }
    return true;
  };

  return (
    <div className="mt-10">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
        Características
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-4">
        {campos.map(({ name, label, placeholder, isOptional }) => (
          <div key={name}>
            <label
              htmlFor={name} // Buena práctica añadir htmlFor
              className="text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              {label} {!isOptional && <span className="text-red-500">*</span>}
            </label>
            <Input
              id={name} // Buena práctica añadir id
              type="text" // Usamos text para permitir que esté vacío y controlar con regex
              inputMode="decimal" // Sugiere teclado numérico en móviles
              placeholder={placeholder}
              {...register(name, {
                validate: isOptional
                  ? validateOptionalNonNegative
                  : validateRequiredNonNegative,
                // Opcional: transformar el valor a número antes de enviar si es necesario
                // setValueAs: (value) => (value === "" ? null : parseFloat(value)),
              })}
              className={`mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ${
                errors[name]
                  ? "ring-red-500 focus:ring-red-500"
                  : "ring-gray-300 dark:ring-gray-600 focus:ring-indigo-600"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
            />
            {errors[name] && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {(errors[name] as FieldError)?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-2">
        {/* Checkbox ¿Es interno? */}
        <div className="flex items-center gap-2 mt-2 sm:col-span-1 md:col-span-1 pt-6">
          {" "}
          {/* Ajuste de espaciado y alineación */}
          <input
            id="esInterno"
            type="checkbox"
            {...register("esInterno")}
            className="h-4 w-4 rounded border-gray-300 bg-white dark:bg-gray-800 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="esInterno"
            className="text-sm text-gray-900 dark:text-white"
          >
            ¿Es interno?
          </label>
        </div>

        {/* Checkbox ¿Es luminoso? */}
        <div className="flex items-center gap-2 mt-2 sm:col-span- md:col-span-2 pt-6">
          {" "}
          {/* Ajuste de espaciado y alineación */}
          <input
            id="esLuminoso"
            type="checkbox"
            {...register("esLuminoso")}
            className="h-4 w-4 rounded border-gray-300 bg-white dark:bg-gray-800 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="esLuminoso"
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
