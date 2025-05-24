import { useFormContext } from "react-hook-form";

const opciones = [
  { id: "disponible", label: "Disponible" },
  { id: "reservado", label: "Reservado" },
  { id: "vendido", label: "Vendido" },
  { id: "alquilado", label: "Alquilado" },
];

export const Estado = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const estado = watch("estado");

  return (
    <div className="mt-10">
      <fieldset>
        <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
          Estado
        </legend>

        <div className="flex flex-col md:flex-row mt-4 gap-x-6 gap-y-8">
          {opciones.map(({ id, label }) => (
            <div key={id} className="flex items-center gap-x-3">
              <input
                id={id}
                type="radio"
                value={id}
                {...register("estado", { required: "El estado es requerido" })}
                checked={estado === id}
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              {errors.estado && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.estado.message as string}
                </p>
              )}
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
