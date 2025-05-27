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

  // Función para manejar el envío del formulario
  const onSubmit = (data: any) => {
    console.log("Datos del formulario:", data);
    const formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];

        if (
          value instanceof FileList ||
          (Array.isArray(value) && value.every((item) => item instanceof File))
        ) {
          const filesToProcess = Array.from(value);

          if (filesToProcess.length === 0 && key === "multipleFiles") {
            continue;
          }

          for (let i = 0; i < filesToProcess.length; i++) {
            const file = filesToProcess[i];
            if (
              file &&
              file instanceof File &&
              typeof file.name === "string" &&
              typeof file.size === "number"
            ) {
              const fileName = file.name || `untitled_from_${key}_${i}`;
              formData.append(key, file, fileName);
            }
          }
        } else if (value instanceof File) {
          const fileName = value.name || `untitled_from_${key}`;
          formData.append(key, value, fileName);
        } else if (typeof value === "object" && value !== null) {
          try {
            formData.append(key, JSON.stringify(value));
          } catch (e) {
            console.error(
              `Error al convertir el objeto para la clave '${key}' a JSON: `,
              e
            );
          }
        } else {
          if (value !== undefined && value !== null) {
            formData.append(key, String(value));
          }
        }
      }
    }

    fetch("http://localhost:5678/webhook-test/nueva-propiedad", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log("Respuesta HTTP Status:", response.status);
        console.log(
          "Respuesta HTTP Content-Type:",
          response.headers.get("Content-Type")
        );
        return response.text();
      })
      .then((text) => {
        console.log("Respuesta cruda (texto) desde n8n:", text);
        try {
          const result = JSON.parse(text);
          console.log(
            "Respuesta del webhook (interpretada como JSON):",
            result
          );
        } catch (e) {
          console.error(
            "Error al interpretar la respuesta de n8n como JSON:",
            e
          );
          console.log("La respuesta no era JSON. Texto recibido:", text);
        }
      })
      .catch((error) => {
        console.error(
          "Error en la solicitud fetch (ej. problema de red, CORS si aplica, etc.):",
          error
        );
      });
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
