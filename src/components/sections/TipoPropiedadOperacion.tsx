import React from "react"; // No es necesario useState
import { useFormContext } from "react-hook-form";

// Definimos los tipos para las opciones para mayor claridad
type PropertyOption = {
  id:
    | "casa"
    | "departamento"
    | "terreno"
    | "local-comercial"
    | "oficina"
    | "galpon";
  label: string;
};

type OperationOption = {
  id: "venta" | "alquiler";
  label: string;
};

const propertyTypeOptions: PropertyOption[] = [
  { id: "casa", label: "Casa" },
  { id: "departamento", label: "Departamento" },
  { id: "terreno", label: "Terreno" },
  { id: "local-comercial", label: "Local Comercial" },
  { id: "oficina", label: "Oficina" },
  { id: "galpon", label: "Galpón" },
];

const operationTypeOptions: OperationOption[] = [
  { id: "venta", label: "Venta" },
  { id: "alquiler", label: "Alquiler" },
];

export default function TipoPropiedadOperacion() {
  // 1. Obtén los métodos de react-hook-form
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Los nombres de los campos como los especificaste
  const propertyFieldName = "tipoPropiedad";
  const operationFieldName = "tipoOperacion";

  return (
    <>
      {/* Tipo de propiedad */}
      <fieldset className="mt-4">
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Tipo Propiedad
        </legend>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {propertyTypeOptions.map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={`prop-${id}`} // Usamos un prefijo para asegurar IDs únicos si es necesario
                type="radio"
                value={id}
                // 2. Registra el input con react-hook-form
                {...register(propertyFieldName, {
                  required: "Por favor, seleccione un tipo de propiedad.",
                })}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // El checked y onChange son manejados por react-hook-form
              />
              <label
                htmlFor={`prop-${id}`} // Asegúrate que el htmlFor coincida con el id del input
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
        {/* 3. Muestra los errores de validación para tipoPropiedad */}
        {errors[propertyFieldName] && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors[propertyFieldName]?.message as string}
          </p>
        )}
      </fieldset>

      {/* Tipo de operación */}
      <fieldset className="mt-10">
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Tipo de Operación
        </legend>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {operationTypeOptions.map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={`op-${id}`} // Usamos un prefijo para asegurar IDs únicos si es necesario
                type="radio"
                value={id}
                // 2. Registra el input con react-hook-form
                {...register(operationFieldName, {
                  required: "Por favor, seleccione un tipo de operación.",
                })}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // El checked y onChange son manejados por react-hook-form
              />
              <label
                htmlFor={`op-${id}`} // Asegúrate que el htmlFor coincida con el id del input
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
        {/* 3. Muestra los errores de validación para tipoOperacion */}
        {errors[operationFieldName] && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors[operationFieldName]?.message as string}
          </p>
        )}
      </fieldset>
    </>
  );
}
