import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";

type DescripcionSectionProps = {
  generateContentWithAI: (
    prompt: string,
    callback: (text: string) => void
  ) => void;
  loadingAI: boolean;
};

export function DescripcionSection({
  generateContentWithAI,
  loadingAI,
}: DescripcionSectionProps) {
  // 1. Obtén los métodos de react-hook-form
  const {
    register,
    setValue,
    watch, // Para obtener el valor actual para el prompt de IA
    formState: { errors },
  } = useFormContext();

  // El nombre del campo para react-hook-form
  const fieldName = "descripcion"; // Asegúrate que este sea el nombre que esperas en tu formulario

  // Observa el valor actual del campo de descripción para usarlo en el prompt de la IA
  const currentDescription = watch(fieldName, ""); // El segundo argumento es el valor por defecto

  // 2. Validación personalizada (ya la tienes, la integraremos en register)
  const noCodigoMalicioso = (value: string) => {
    const regex = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  // La función handleChange local ya no es necesaria, register se encarga.

  return (
    <>
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
        Descripción
      </h2>
      <div className="mt-4">
        <textarea
          rows={4}
          // 3. Registra el textarea con react-hook-form
          {...register(fieldName, {
            validate: {
              noCodigoMalicioso: noCodigoMalicioso,
            },
            // Puedes añadir más validaciones aquí si es necesario
            required: "La descripción es obligatoria",
          })}
          className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            errors[fieldName] ? "ring-red-500" : "" // Estilo opcional para errores
          }`}
          placeholder="Ingrese la descripción"
          // El valor es manejado por react-hook-form, no necesitas value ni onChange aquí directamente
        />
        {/* 4. Muestra los errores de validación */}
        {errors[fieldName] && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors[fieldName]?.message as string}
          </p>
        )}
      </div>
      <div className="mt-3 flex justify-end">
        <Button
          type="button"
          onClick={() =>
            generateContentWithAI(
              `Genera una descripción para la propiedad, partiendo de la descripción: ${
                currentDescription || "" // Usa el valor observado
              }`,
              (newText: string) => {
                // 5. Actualiza el valor del campo usando setValue y valida
                setValue(fieldName, newText, {
                  shouldValidate: true, // Para que se ejecute la validación noCodigoMalicioso
                  shouldDirty: true, // Para marcar el campo como modificado
                });
              }
            )
          }
          disabled={loadingAI}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
        >
          {loadingAI ? (
            "Generando..."
          ) : (
            <>
              <span className="mr-2">🤖</span>
              Generar
            </>
          )}
        </Button>
      </div>
    </>
  );
}
