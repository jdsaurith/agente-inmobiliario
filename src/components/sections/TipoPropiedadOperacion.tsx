import { useState } from "react";

export default function TipoPropiedadOperacion() {
  const [propertyType, setPropertyType] = useState<
    | "casa"
    | "departamento"
    | "terreno"
    | "local-comercial"
    | "oficina"
    | "galpon"
  >("casa");

  const [operationType, setOperationType] = useState<"venta" | "alquiler">(
    "alquiler"
  );

  return (
    <>
      {/* Tipo de propiedad */}
      <fieldset className="mt-4">
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Tipo Propiedad
        </legend>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {[
            { id: "casa", label: "Casa" },
            { id: "departamento", label: "Departamento" },
            { id: "terreno", label: "Terreno" },
            { id: "local-comercial", label: "Local Comercial" },
            { id: "oficina", label: "Oficina" },
            { id: "galpon", label: "Galpón" },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={id}
                name="tipo-propiedad"
                type="radio"
                value={id}
                checked={propertyType === id}
                onChange={() => setPropertyType(id as typeof propertyType)}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
              <label
                htmlFor={id}
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Tipo de operación */}
      <fieldset className="mt-10">
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Tipo de Operación
        </legend>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          {[
            { id: "venta", label: "Venta" },
            { id: "alquiler", label: "Alquiler" },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={id}
                name="tipo-operacion"
                type="radio"
                value={id}
                checked={operationType === id}
                onChange={() => setOperationType(id as typeof operationType)}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
              <label
                htmlFor={id}
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
}
