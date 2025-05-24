import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TipoPropiedadOperacion from "../sections/TipoPropiedadOperacion";
import TituloSection from "../sections/TituloSection";
import onGenerateTitleAI from "@/utils/fetchApi";
import UrlSection from "../sections/UrlSection";
import { DescripcionSection } from "../sections/DescripcionSection";
import TiposPrecio from "../sections/TiposPrecio";
import UbicacionGeografica from "../sections/UbicacionGeografica";
import DireccionCompleta from "../sections/DireccionCompleta";
import Caracteristicas from "../sections/Caracteristicas";
import Comodidades from "../sections/Comodidades";
import ImagenesSection from "../sections/ImagenesSection";
import { Estado } from "../sections/EstadoSection";

export default function Agent() {
  const methods = useForm();
  const [loadingAI, setLoadingAI] = useState<boolean>(false);

  const generateContentWithAI = async (
    prompt: string,
    setValue: (value: string) => void
  ) => {
    try {
      setLoadingAI(true);
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok) {
        setValue(data.text); // Actualiza el campo correspondiente
      } else {
        console.error(
          "Error al generar contenido:",
          data.message || "Error desconocido"
        );
      }
    } catch (error) {
      console.error("Error generando contenido con IA:", error);
    } finally {
      setLoadingAI(false);
    }
  };

  const onSubmit = (data: any) => {
    console.log("data:", data);
    console.log("data.multipleFiles:", data.multipleFiles);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-12 mt-10">
          <div className="border-b border-gray-900/10 pb-12">
            {/* Título */}
            <TituloSection onGenerateTitle={onGenerateTitleAI} />

            {/* URL única */}
            <UrlSection onGenerateUrl={onGenerateTitleAI} />

            {/* Descripción */}
            <DescripcionSection
              loadingAI={loadingAI}
              generateContentWithAI={generateContentWithAI}
            />

            {/* Tipos */}
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white mt-6">
                Tipos
              </h2>

              <div className="mt-10 space-y-10">
                {/* Tipos de Propiedad y Tipos Operación */}
                <TipoPropiedadOperacion />

                {/* Input para Precio y Tipo de Moneda*/}
                <TiposPrecio />

                {/* Input para Ubicación */}
                <UbicacionGeografica />

                {/* Input para Dirección Completa */}
                <DireccionCompleta />

                {/* Input para Características */}
                <Caracteristicas />

                {/* comodidades */}
                <Comodidades />
              </div>
            </div>

            {/* Imagenes */}
            <ImagenesSection />

            {/* Estado */}
            <Estado />
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
    </FormProvider>
  );
}
