// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { IoChevronDownOutline } from "react-icons/io5";

export default function Agent() {
  return (
    <form>
      <div className="space-y-12 mt-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
            Título
          </h2>
          {/* Input para el título */}
          <div className="mt-4">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ingrese el título"
            />
          </div>

          {/* Input título IA con botón de IA a la derecha */}
          <div className="mt-4 flex items-center gap-x-3">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ingrese contenido"
            />
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
            >
              <span className="mr-2">🤖</span>
              Generar
            </button>
          </div>

          {/* URL única */}
          <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
            URL única
          </h2>

          <div className="mt-4 flex items-center gap-x-3">
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ingrese la URL única"
            />
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
            >
              <span className="mr-1">🤖</span>
              Generar
            </button>
          </div>

          {/* Descripción */}
          <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
            Descripción
          </h2>
          <div className="mt-4">
            <textarea
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ingrese la descripción"
            />
          </div>
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center"
            >
              <span className="mr-2">🤖</span>
              Generar
            </button>
          </div>

          {/* Tipos */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
              Tipos
            </h2>
            {/* Tipo de propiedad */}
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Tipo Propiedad
                </legend>
                {/* <p className="mt-1 text-sm/6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p> */}
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="casa"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="casa"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Casa
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="departamento"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="departamento"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Departamento
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="terreno"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="terreno"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Terreno
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="local-comercial"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="local-comercial"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Local Comercial
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="oficina"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="oficina"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Oficina
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="galpon"
                      name="tipo-propiedad"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="galpon"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Galpon
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Tipo de operación */}
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Tipo de Operación
                </legend>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="venta"
                      name="tipo-operacion"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="venta"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Venta
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="alquiler"
                      name="tipo-operacion"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="alquiler"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      Alquiler
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Input para Precio */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Precio
              </h2>
              <div className="">
                <input
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ingrese el precio"
                />
              </div>

              {/* Moneda */}
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Moneda
                </legend>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-1">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="usd"
                      name="moneda"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="usd"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      USD
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="ars"
                      name="moneda"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label
                      htmlFor="ars"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                    >
                      ARS
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Input para Ubicación */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Ubicación
              </h2>
              <div className="flex flex-col md:flex-row gap-x-6 gap-y-6">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Latitude"
                />

                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Longitude"
                />

                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Altitude"
                />
              </div>

              {/* Input para Dirección */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Dirección
              </h2>
              <div className="">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ingrese la dirección"
                />
              </div>

              {/* Input para Barrio */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Barrio
              </h2>
              <div className="">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ingrese el barrio"
                />
              </div>

              {/* Input para Ciudad */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Ciudad
              </h2>
              <div className="">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ingrese la ciudad"
                />
              </div>

              {/* Input para Características */}
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
                Características
              </h2>
              <div className="flex flex-col gap-x-6 gap-y-6">
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Ambientes
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ambientes"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Dormitorios
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Dormitorios"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Baños
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Baños"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Toilet
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Toilet"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Expensas
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Expensas"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Área (m²)
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Área (m²)"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Área Total (m²)
                </span>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-white dark:bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Área Total (m²)"
                />
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  ¿Es interno?
                </span>
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="interno"
                    name="interno"
                    type="checkbox"
                    aria-describedby="interno-description"
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                  </svg>
                </div>

                <span className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  ¿Es luminoso?
                </span>
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="luminoso"
                    name="luminoso"
                    type="checkbox"
                    aria-describedby="luminoso-description"
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                  </svg>
                </div>
              </div>

              {/* comodidades */}
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Amenities
                </legend>
                <div className="mt-6 space-y-2">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          defaultChecked
                          id="piscina"
                          name="piscina"
                          type="checkbox"
                          aria-describedby="piscina-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="piscina"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Piscina
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="cochera"
                          name="cochera"
                          type="checkbox"
                          aria-describedby="cochera-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="cochera"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Cochera
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="jardin"
                          name="jardin"
                          type="checkbox"
                          aria-describedby="jardin-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="jardin"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Jardín
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="seguridad"
                          name="seguridad"
                          type="checkbox"
                          aria-describedby="seguridad-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="seguridad"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Seguridad
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="gimnasio"
                          name="gimnasio"
                          type="checkbox"
                          aria-describedby="gimnasio-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="gimnasio"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Gimnasio
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="balcon"
                          name="balcon"
                          type="checkbox"
                          aria-describedby="balcon-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="balcon"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Balcón
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="lavadero"
                          name="lavadero"
                          type="checkbox"
                          aria-describedby="lavadero-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="lavadero"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Lavadero
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="parrilla"
                          name="parrilla"
                          type="checkbox"
                          aria-describedby="parrilla-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="parrilla"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Parrilla
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="sum"
                          name="sum"
                          type="checkbox"
                          aria-describedby="sum-description"
                          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-checked:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-indeterminate:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="sum"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        SUM
                      </label>
                      <p id="sum-description" className="text-gray-500">
                        Salón de usos múltiples
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          {/* Imagenes */}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaRegCircleUser
                  aria-hidden="true"
                  className="size-12 text-gray-300"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-10">
                <div className="text-center">
                  <MdOutlineAddPhotoAlternate
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-600 dark:text-white">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer px-2 rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600 dark:text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Estado */}
          <div className="">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Estado
              </legend>

              <div className="flex flex-col md:flex-row mt-10 gap-x-6 gap-y-8">
                <div className="flex items-center gap-x-3">
                  <input
                    defaultChecked
                    id="disponible"
                    name="estado"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="disponible"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Disponible
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="reservado"
                    name="estado"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="reservado"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Reservado
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="vendido"
                    name="estado"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="vendido"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Vendido
                  </label>
                </div>

                <div className="flex items-center gap-x-3">
                  <input
                    id="alquilado"
                    name="estado"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="alquilado"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Alquilado
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm/6 font-semibold text-gray-900 dark:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
