// import { useEffect, useState } from "react"
// import { useChat } from "../../hooks/useChat"

// const Chat = () => {
//   const [position, setPosition] = useState("bottom-0")
//   const [isChatOpen, setIsChatOpen] = useState(false)
//   const [message, setMessage] = useState("")
//   const { messages, sendMessage } = useChat()

//   useEffect(() => {
//     function handlePosition() {
//       if (
//         Math.round(window.scrollY + window.innerHeight) >=
//         document.body.scrollHeight
//       ) {
//         setPosition("bottom-16")
//       } else {
//         setPosition("bottom-0")
//       }
//     }

//     window.addEventListener("scroll", handlePosition)

//     return () => {
//       window.removeEventListener("scroll", () => {})
//     }
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault()

//     setMessage(e.target.value)
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     sendMessage(message)

//     setMessage("")
//   }

//   return (
//     <>
//       <div
//         className={`fixed right-0 mb-4 mr-4 transition duration-300 ${position}`}
//       >
//         {!isChatOpen && (
//           <button
//             className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300 flex items-center"
//             onClick={() => setIsChatOpen(true)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6 mr-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               ></path>
//             </svg>
//             Chatear con mi bot
//           </button>
//         )}
//       </div>
//       {isChatOpen && (
//         <div className="fixed bottom-4 right-4 w-96 z-10">
//           <div className="dark:bg-dark-primary/95 bg-light-primary/95 shadow-md rounded-lg max-w-lg w-full">
//             <div className="p-4 border-b dark:bg-black bg-gray-500 text-white rounded-t-lg flex justify-between items-center">
//               <p className="text-lg font-semibold">Luka 💻</p>
//               <button
//                 className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
//                 onClick={() => setIsChatOpen(false)}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <form
//               id="chatbox"
//               className="p-4 h-80 overflow-y-auto"
//               onSubmit={handleSubmit}
//             >
//               <div className="mb-2 text-right">
//                 <p className="dark:bg-gray-800 bg-gray-800 text-white rounded-lg py-2 px-4 inline-block">
//                   hello
//                 </p>
//               </div>
//               <div className="mb-2">
//                 <p className="dark:bg-gray-200 bg-gray-300 text-gray-700 rounded-lg py-2 px-4 inline-block">
//                   This is a response from the chatbot.
//                 </p>
//               </div>
//               <div className="mb-2 text-right">
//                 <p className="dark:bg-gray-800 bg-gray-800 text-white rounded-lg py-2 px-4 inline-block">
//                   hello
//                 </p>
//               </div>
//               <div className="mb-2">
//                 <p className="dark:bg-gray-200 bg-gray-300 text-gray-700 rounded-lg py-2 px-4 inline-block">
//                   This is a response from the chatbot.
//                 </p>
//               </div>
//               <div className="mb-2 text-right">
//                 <p className="dark:bg-gray-800 bg-gray-800 text-white rounded-lg py-2 px-4 inline-block">
//                   hello
//                 </p>
//               </div>
//               <div className="mb-2">
//                 <p className="dark:bg-gray-200 bg-gray-300 text-gray-700 rounded-lg py-2 px-4 inline-block">
//                   This is a response from the chatbot.
//                 </p>
//               </div>
//               {messages.slice(1).map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`mb-2 ${
//                     msg.role === "assistant" ? "text-right" : ""
//                   }`}
//                 >
//                   <p
//                     className={`${
//                       msg.role === "assistant"
//                         ? "dark:bg-gray-800 bg-gray-800 text-white"
//                         : "dark:bg-gray-200 bg-gray-300 text-gray-700"
//                     } rounded-lg py-2 px-4 inline-block`}
//                   >
//                     {msg.content}
//                   </p>
//                 </div>
//               ))}
//               <div className="p-4 border-t flex">
//                 <input
//                   id="user-input"
//                   type="text"
//                   placeholder="Escribi tu mensaje..."
//                   className="text-black w-full px-3 py-2 rounded-l-md outline-none focus:ring-1 focus:ring-black transition duration-300"
//                   value={message}
//                   onChange={handleChange}
//                 />
//                 <button
//                   id="send-button"
//                   className="dark:bg-black bg-light-accent text-white px-4 py-2 rounded-r-md hover:dark:bg-gray-800 hover:ring-1 hover:ring-black transition duration-300"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Chat
