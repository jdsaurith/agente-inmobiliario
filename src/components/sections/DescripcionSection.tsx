import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

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
  const [description, setDescription] = useState("");

  // Validación personalizada para evitar código malicioso básico
  const noCodigoMalicioso = (value: string) => {
    const regex = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (noCodigoMalicioso(val) === true) {
      setDescription(val);
    }
  };

  return (
    <>
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
        Descripción
      </h2>
      <div className="mt-4">
        <textarea
          rows={4}
          value={description}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ingrese la descripción"
        />
      </div>
      <div className="mt-3 flex justify-end">
        <Button
          type="button"
          onClick={() =>
            generateContentWithAI(
              `Genera una descripción para la propiedad, partiendo de la descripción: ${description}`,
              setDescription
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
