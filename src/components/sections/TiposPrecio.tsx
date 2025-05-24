import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";

interface TiposPrecioProps {
  // Agregar otras props si las necesitas
}

const TiposPrecio: React.FC<TiposPrecioProps> = () => {
  // Usar useFormContext para acceder al form del componente padre
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  // Observa el valor de la moneda desde el form (por defecto 'usd')
  const monedaActual = watch("moneda", "ars");
  const [currency, setCurrency] = useState(monedaActual);

  // Sincroniza el valor con react-hook-form
  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
    setValue("moneda", value);
  };

  // Validación personalizada para evitar código malicioso básico
  const noCodigoMalicioso = (value: string | number): string | boolean => {
    // Convertir a string si es número
    const stringValue = String(value);
    // Aquí se rechazan valores que contengan etiquetas HTML simples
    const regex = /<\/?[\w\s="/.':;#-\/\?]+>/gi;
    return !regex.test(stringValue) || "No se permiten etiquetas HTML";
  };

  return (
    <div>
      {/* Input para Precio */}
      <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
        Precio
      </h2>
      <div className="mt-2">
        <Input
          type="number"
          {...register("price", {
            required: "El precio es requerido",
            min: {
              value: 0,
              message: "El precio debe ser mayor o igual a 0",
            },
            validate: {
              noMaliciousCode: noCodigoMalicioso,
              isValidNumber: (value) =>
                !isNaN(Number(value)) || "Debe ser un número válido",
            },
          })}
          className={`block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ${
            errors.price
              ? "ring-red-500 focus:ring-red-500"
              : "ring-gray-300 dark:ring-gray-600 focus:ring-indigo-600"
          } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          placeholder="Ingrese el precio"
        />

        {/* Mensaje de error */}
        {errors.price && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.price.message as string}
          </p>
        )}
      </div>

      {/* MONEDA */}
      <fieldset className="mt-10">
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Moneda
        </legend>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-1">
          {[
            { id: "usd", label: "USD" },
            { id: "ars", label: "ARS" },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={id}
                type="radio"
                value={id}
                checked={currency === id}
                onChange={() => handleCurrencyChange(id)}
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
    </div>
  );
};

export default TiposPrecio;
