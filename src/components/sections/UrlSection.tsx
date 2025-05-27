import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type Props = {
  onGenerateUrl: () => Promise<string>;
};

export default function UrlSection({ onGenerateUrl }: Props) {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Validación para evitar etiquetas HTML
  const noCodigoMalicioso = (value: string) => {
    const regex = /<\/?[\w\s="/.':;#-\/?]+>/gi;
    return !regex.test(value) || "No se permiten etiquetas HTML";
  };

  // Validación básica para formato URL única (solo letras, números, guiones y guion bajo)
  const validarUrl = (value: string) => {
    const regexUrl = /^[a-zA-Z0-9-_]+$/;
    if (!regexUrl.test(value)) {
      return "La URL solo puede contener letras, números, guiones y guion bajo";
    }
    return true;
  };

  const handleGenerate = async () => {
    const generatedUrl = await onGenerateUrl();
    setValue("urlUnica", generatedUrl);
  };

  return (
    <div className="space-y-2">
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
        URL única
      </h2>

      <div className="flex gap-2 items-end">
        <Input
          {...register("urlUnica", {
            required: "La URL única es obligatoria",
            validate: {
              noCodigoMalicioso,
              validarUrl,
            },
          })}
          placeholder="Ej: departamento-palermo-2dorm"
        />

        <Button type="button" onClick={handleGenerate}>
          <span className="mr-1">🤖</span>
          Generar
        </Button>
      </div>
      {errors.urlUnica && (
        <p className="text-red-500 text-sm mt-1">
          {errors.urlUnica.message as string}
        </p>
      )}
    </div>
  );
}
