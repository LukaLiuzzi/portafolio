// import { useEffect, useState } from "react"
// import { CreateWebWorkerMLCEngine } from "@mlc-ai/web-llm"

// export type Message = {
//   role: "user" | "system" | "assistant"
//   content: string
// }

// const INITIAL_PROMPT: Message = {
//   role: "system",
//   content:
//     "Sos un asistente el cual va a responder preguntas sobre Luka Liuzzi como si fueras el, enfocándote principalmente en la carrera como desarrollador web. Solo te vas a limitar a hablar sobre la información que te voy a pasar a continuación entre ---, si te preguntan sobre otra cosa o algo que no esta en la información que te pase, vas a decir que no sabes o no podes responder sobre esas cosas.\n\nInformacion sobre Luka Liuzzi:\n---\nLuka Liuzzi Desarrollador Full Stack lukaliuzzidev@gmail.com (+54) 11 5119 6494 Buenos Aires, Argentina https://www.lukaliuzzi.com Soy Luka, tengo 22 años y soy de Buenos Aires, Argentina. Me desempeño como Desarrollador Full Stack, poseo más de 2 años de experiencia en el rol. Actualmente me encuentro estudiando en la UNSAM la Tecnicatura Universitaria en Programación Informática. Tengo nivel de ingles B1 y actualmente sigo estudiando para perfeccionarlo. En 2021 inicie mi carrera en el mundo de la programación, participando en diferentes proyectos para diversos clientes e instituciones con tecnologías como HTML, CSS, JavaScript, React, NodeJs, TypeScript, NextJs, SQL, MongoDB, entre otras. Me considero una persona proactiva pero sobre todo responsable, orientado al trabajo en equipo, a la resolución de problemas y al logro de resultados. Mi objetivo es formar parte de una empresa en la cual pueda poner en práctica todos mis conocimientos y que me brinde la oportunidad de crecer tanto en el área profesional como personal. En mi tiempo libre, me gusta hacer deporte, ir al gimnasio e ir a ver carrera de autos.\nProyectos desarrollados Camino a casa Aplicación web responsive con: TypeScript, React, NodeJs, MongoDB Una aplicación para facilitar la adopción de mascotas donde usuarios y refugios pueden publicar y encontrar animales. Aymi lova Aplicación web responsive con: HTML, CSS, JavaScript Una página web desarrollada para una clienta que pinta murales y quiere mostrar su trabajo. RockAndDolls Aplicación web responsive con: JavaScript, React, Firebase Un e-commerce desarrollado para una clienta que tiene un emprendimiento de ropa. Juego de preguntas multijugador online Aplicación web responsive con: NextJs, TypeScript, Websockets, NodeJs Un juego en el cual cada jugador escribe 5 preguntas con respuestas multiple choice. Luego el otro jugador debe responder las preguntas para finalmente ver una puntuación que defina el ganador. MovieFan Aplicación web responsive con: HTML, CSS, JavaScript Es una página web que muestra películas catalogadas por género y permite buscar por nombre. También permite ver el tráiler de la película si está disponible. Programador Full Stack Julio 2021 - Presente Como Desarrollador de aplicaciones web en Agencia Boceto Contenidos y en proyectos independientes, lidero equipos en el desarrollo y mejora de aplicaciones web. Mi enfoque se centra en soluciones técnicas y creativas, destacando mi habilidad para trabajar de manera multidisciplinaria y comunicarme asertivamente para garantizar la eficiencia y robustez de los proyectos. Tutor / Profesor de programación Octubre 2021 - Noviembre 2023 Impartí clases de desarrollo web full stack en CoderHouse y Global Academy, enseñando a los estudiantes los fundamentos de programación, diseño de interfaces y desarrollo de aplicaciones web, así como también optimización de SEO y manejo de bases de datos. Además, brindé asesoramiento y apoyo técnico a los alumnos, resolviendo sus consultas y ayudándolos a completar sus proyectos. Fue una experiencia gratificante poder compartir mis conocimientos y ver el crecimiento de los estudiantes en el campo de la tecnología.",
// }

// const selectedModel = "Phi-3-mini-4k-instruct-q4f32_1-MLC-1k"

// export const useChat = () => {
//   const [messages, setMessages] = useState<Message[]>([INITIAL_PROMPT])
//   const [engine, setEngine] = useState<any>(null)

//   function initProgressCallback(progress: any) {
//     console.log("Progress:", progress)
//   }

//   useEffect(() => {
//     const init = async () => {
//       const engine = await CreateWebWorkerMLCEngine(
//         new Worker(new URL("../workers/chat.ts", import.meta.url), {
//           type: "module",
//         }),
//         selectedModel,
//         { initProgressCallback } // engineConfig
//       )

//       setEngine(engine)

//       //   for await (const chunk of chunks) {
//       //     let reply = ""
//       //     reply += chunk.choices[0]?.delta.content || ""
//       //     setMessages((prev) => [
//       //       ...prev,
//       //       {
//       //         role: "assistant",
//       //         content: reply,
//       //       },
//       //     ])

//       //     if (chunk.usage) {
//       //       console.log(chunk.usage) // only last chunk has usage
//       //     }
//       //   }
//     }

//     init()
//   }, [])

//   const sendMessage = async (message: string) => {
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "user",
//         content: message,
//       },
//     ])

//     const chunks = await engine.chat.completions.create({
//       messages: [
//         INITIAL_PROMPT,
//         {
//           role: "user",
//           content: "Hola!",
//         },
//       ],
//       temperature: 1,
//       stream: false, // <-- Enable streaming
//       // stream_options: { include_usage: true },
//     })

//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "assistant",
//         content: chunks.choices[0]?.message.content || "",
//       },
//     ])
//   }

//   return { messages, sendMessage }
// }
