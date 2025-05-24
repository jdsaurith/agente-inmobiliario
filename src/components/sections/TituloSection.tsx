import { useFormContext } from "react-hook-form";
import { useState } from "react";

type Props = {
  onGenerateTitle: () => Promise<string>; // función que genera título con IA
};

export default function TituloSection({ onGenerateTitle }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  //    const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const handleGenerateTitle = async () => {
    setLoading(true);
    try {
      const generated = await onGenerateTitle();
      setValue("titulo", generated);
    } catch (error) {
      console.error("Error al generar título:", error);
    } finally {
      setLoading(false);
    }
  };

  // Validación personalizada para evitar código malicioso básico
  const noCodigoMalicioso = (value: string) => {
    const regex = /<\/?[\w\s="/.':;#-\/?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  return (
    <section className="mb-6">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
        Título
      </h2>
      <div className="mt-4 flex gap-2 items-end">
        <input
          type="text"
          {...register("titulo", {
            required: true,
            validate: noCodigoMalicioso,
          })}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ingrese el título"
        />
        {errors.titulo && (
          <p className="text-red-500 text-sm mt-1">
            {errors.titulo.message as string}
          </p>
        )}
        <button
          type="button"
          onClick={handleGenerateTitle}
          disabled={loading}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
        >
          {loading ? (
            "Generando..."
          ) : (
            <>
              <span className="mr-2">🤖</span>
              Generar
            </>
          )}
        </button>
      </div>
    </section>
  );
}
