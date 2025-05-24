import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { MdClose, MdOutlineAddPhotoAlternate } from "react-icons/md";

interface UploadedFile extends File {}

const ImagenesSection = () => {
  const { register, setValue, watch } = useFormContext();

  const mainImage = watch("mainImage");
  const multipleFiles = watch("multipleFiles");
  console.log("multipleFiles", multipleFiles);

  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  useEffect(() => {
    register("multipleFiles"); // se asegura que el campo esté registrado
  }, [register]);

  useEffect(() => {
    if (mainImage && mainImage[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setMainImagePreview(e.target.result);
        }
      };
      reader.readAsDataURL(mainImage[0]);
    } else {
      setMainImagePreview(null);
    }
  }, [mainImage]);

  useEffect(() => {
    setValue("multipleFiles", uploadedFiles);
  }, [uploadedFiles, setValue]);

  const handleMultipleFilesChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);

      setUploadedFiles((prev) => {
        const updatedFiles = [...prev, ...filesArray];
        setValue("multipleFiles", updatedFiles); // <-- Esto actualiza react-hook-form
        return updatedFiles;
      });
    }
  };

  const removeMainImage = (): void => {
    setValue("mainImage", null);
    setMainImagePreview(null);
  };

  const removeFile = (indexToRemove: number): void => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (_, index) => index !== indexToRemove
      );
      setValue("multipleFiles", updatedFiles); // <-- sincronizar con el form
      return updatedFiles;
    });
  };

  const handleMainImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      // setMainImage(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setMainImagePreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMainImageDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (files.length > 0) {
      setUploadedFiles((prev) => {
        const newFiles = [...prev, ...files];
        setValue("multipleFiles", newFiles); // <-- Esto actualiza react-hook-form
        return newFiles;
      });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      {/* Imagen Principal */}
      <div className="col-span-full">
        <label
          htmlFor="main-image"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Imagen Principal
        </label>

        {mainImagePreview ? (
          <div className="mt-2 relative inline-block">
            <img
              src={mainImagePreview}
              alt="Imagen principal"
              className="w-64 h-48 object-cover rounded-lg border"
            />
            <button
              onClick={removeMainImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <MdClose className="w-4 h-4" />
            </button>
            {/* Botón Generar */}
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center mt-4"
              onClick={() => {
                // Por ahora no hace nada
              }}
            >
              <span className="mr-2">🤖</span>
              Generar
            </button>
          </div>
        ) : (
          <div
            onDrop={handleMainImageDrop}
            onDragOver={handleMainImageDragOver}
            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-10"
          >
            <div className="text-center">
              <MdOutlineAddPhotoAlternate className="mx-auto size-12 text-gray-300" />
              <div className="mt-4 flex text-sm text-gray-600 dark:text-white">
                <label
                  htmlFor="main-image"
                  className="relative cursor-pointer px-2 rounded-md bg-white dark:bg-gray-800 font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                >
                  <span>Subir Imagen</span>
                  <input
                    id="main-image"
                    type="file"
                    accept="image/*"
                    {...register("mainImage")}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">o arrastra aquí</p>
              </div>
              <p className="text-xs text-gray-600 dark:text-white">
                PNG, JPG, hasta 10MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Múltiples Archivos */}
      <div className="col-span-full">
        <label
          htmlFor="multiple-files"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Subir múltiples archivos
        </label>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 dark:border-white px-6 py-10"
        >
          <div className="text-center">
            <MdOutlineAddPhotoAlternate className="mx-auto size-12 text-gray-300" />
            <div className="mt-4 flex text-sm text-gray-600 dark:text-white">
              <label
                htmlFor="multiple-files"
                className="relative cursor-pointer px-2 rounded-md bg-white dark:bg-gray-800 font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
              >
                <span>Subir archivos</span>
                <input
                  id="multiple-files"
                  type="file"
                  multiple
                  accept="image/*"
                  // {...register("multipleFiles")}
                  onChange={handleMultipleFilesChange}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">o arrastra aquí</p>
            </div>
            <p className="text-xs text-gray-600 dark:text-white">
              PNG, JPG, GIF hasta 10MB (varios archivos permitidos)
            </p>
          </div>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Archivos seleccionados ({uploadedFiles.length}):
            </h4>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-md"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <MdClose className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagenesSection;
