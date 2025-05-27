// src/components/PortalesSection.tsx
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

// Define los portales disponibles. El 'id' será el valor almacenado en el array.
const PORTALES_DISPONIBLES = [
  { id: "Sanity", label: "Sanity" },
  { id: "ZonaProp", label: "ZonaProp" },
  { id: "ArgenProp", label: "ArgenProp" }, // Corregí "AgenProp" a "ArgenProp" por ser más común, ajústalo si es necesario.
  { id: "MercadoLibre", label: "Mercado Libre" },
];

interface PortalesSectionProps {
  /**
   * El nombre del campo como se registrará en react-hook-form.
   * Por defecto es "selectedPortals".
   */
  fieldName?: string;
}

const PortalesSection: React.FC<PortalesSectionProps> = ({
  fieldName = "selectedPortals",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Asume que FormProvider está en un componente padre

  return (
    <fieldset className="mt-6 py-4">
      <legend className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
        Portales para Publicar
      </legend>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Debes seleccionar al menos un portal donde se publicará la propiedad.
      </p>

      <Controller
        name={fieldName}
        control={control}
        defaultValue={[]} // Por defecto, ningún portal está seleccionado (array vacío)
        rules={{
          validate: (selectedPortals: string[]) =>
            (selectedPortals && selectedPortals.length > 0) ||
            "Debes seleccionar al menos un portal.",
        }}
        render={({ field }) => (
          <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
            {PORTALES_DISPONIBLES.map((portal) => (
              <div key={portal.id} className="flex items-center">
                <input
                  id={`portal-${portal.id}`}
                  type="checkbox"
                  value={portal.id}
                  // Verifica si el portal actual está incluido en el array de valores del campo
                  checked={field.value?.includes(portal.id)}
                  onChange={(e) => {
                    const currentSelectedPortals = field.value || [];
                    let newSelectedPortals: string[];

                    if (e.target.checked) {
                      // Si se marca, añade el portal.id al array
                      newSelectedPortals = [
                        ...currentSelectedPortals,
                        portal.id,
                      ];
                    } else {
                      // Si se desmarca, filtra el portal.id del array
                      newSelectedPortals = currentSelectedPortals.filter(
                        (id: string) => id !== portal.id
                      );
                    }
                    // Actualiza el valor del campo en react-hook-form
                    field.onChange(newSelectedPortals);
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-indigo-600"
                />
                <label
                  htmlFor={`portal-${portal.id}`}
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  {portal.label}
                </label>
              </div>
            ))}
          </div>
        )}
      />
      {/* Muestra el mensaje de error si la validación falla */}
      {errors[fieldName] && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {errors[fieldName]?.message as string}
        </p>
      )}
    </fieldset>
  );
};

export default PortalesSection;
