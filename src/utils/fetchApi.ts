async function onGenerateTitleAI(): Promise<string> {
  try {
    // const res = await fetch("/api/ia/generar-titulo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     prompt:
    //       "Genera un título atractivo para una propiedad en venta o alquiler",
    //   }),
    // });

    // if (!res.ok) throw new Error("Error al generar título");

    // const data = await res.json();
    // return data.resultado || "Título generado por IA";
    return "Título generado por IA";
  } catch (error) {
    console.error("Error al llamar a la IA:", error);
    return "No se pudo generar el título";
  }
}
export default onGenerateTitleAI;
