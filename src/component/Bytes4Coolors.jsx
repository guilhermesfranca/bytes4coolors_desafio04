import { TbLockOpen2 } from "react-icons/tb";
import { TbLock } from "react-icons/tb";
import { TbCopy } from "react-icons/tb";
import namer from "color-namer";
import { useState, useEffect } from "react";

export default function Bytes4Coolors() {
  //função que gera a cor aleatória
  const generateRandomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  const [colors, setColors] = useState([
    { color: "#B31FF2", locked: false, inicial: "B" },
    { color: "#B31FF2", locked: false, inicial: "Y" },
    { color: "#B31FF2", locked: false, inicial: "T" },
    { color: "#B31FF2", locked: false, inicial: "E" },
    { color: "#B31FF2", locked: false, inicial: "S" },
  ]);

  // Função para gerar nova paleta (mantendo cores bloqueadas)
  const generateNewPalette = () => {
    setColors((prev) =>
      prev.map((novaCor) =>
        novaCor.locked
          ? novaCor
          : { ...prev, color: generateRandomColor(), inicial: "" }
      )
    );
  };

  const blockColor = (index) => {
    setColors((prev) =>
      prev.map((novaCor, i) =>
        i === index
          ? { ...novaCor, locked: !novaCor.locked, inicial: "" }
          : novaCor
      )
    );
  };

  const getColorName = (hex) => {
    const names = namer(hex); // retorna várias paletas
    return names.ntc[0].name; // pega o nome mais próximo (da paleta 'ntc')
  };

  const copiarCor = (hex, index) => {
    return alert(`A cor ${getColorName(
      colors[index].color
    )} foi copiada com sucesso
seu código hex é: ${hex.toUpperCase()} `);
  };

  return (
    <div className="h-screen w-full ">
      <nav className="border-gray-200 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/BYTESS.png" className="h-14" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="https://bytes4future.pt"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="block py-2 px-3 md:p-0 text-purple-700 text-lg font-sans font-bold rounded-sm hover:text-purple-800 "
                  aria-current="page"
                >
                  BYTES4FUTURE
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/guilhermesfranca/"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="block py-2 px-3 md:p-0 text-purple-700 text-md font-sans font-bold rounded-sm hover:text-purple-800 "
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/guilhermesfranca/bytes4coolors_desafio04"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="block py-2 px-3 md:p-0 text-purple-700 text-md font-sans font-bold rounded-sm hover:text-purple-800 "
                >
                  Repositório
                </a>
              </li>
              <li>
                <a
                  href="https://guilhermesfranca.github.io/portfolio-bytes/"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="block py-2 px-3 md:p-0 text-purple-700 text-md font-sans font-bold rounded-sm hover:text-purple-800 "
                >
                  Portfólio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={generateNewPalette}
          className="bg-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2 hover:shadow-xl transition-shadow"
        >
          <span className="font-medium text-lg text-purple-700  hover:text-purple-800">
            Gerar Paleta (Espaço)
          </span>
        </button>
      </div>

      <div className="flex h-full " style={{ height: "calc(100vh - 87px)" }}>
        {colors.map((novaCor, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center justify-center relative group transition-all duration-300"
            style={{ backgroundColor: novaCor.color }}
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-6xl text-white font-sans font-bold animate-pulse">
                {novaCor.inicial}
              </h2>

              <div className="flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center">
                <button
                  onClick={() => blockColor(index)}
                  className="mt-15 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 flex items-center justify-center w-14 h-14 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <p className="text-lg font-bold text-gray-700">
                    {colors[index].locked ? <TbLock /> : <TbLockOpen2 />}
                  </p>
                </button>

                <button
                  onClick={() => copiarCor(colors[index].color, index)}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 flex items-center justify-center w-14 h-14 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <p className="text-lg font-bold text-gray-700">
                    <TbCopy />
                  </p>
                </button>
              </div>

              <div className="text-lg mt-15 font-mono font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-200">
                <p className="text-center mt-">
                  {colors[index].color.toUpperCase()}
                </p>
                <p className="text-center ">
                  {getColorName(colors[index].color)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer class="rounded-lg shadow-sm bg-neutral-50">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="/BYTESS.png" class="h-8" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-[#B31FF2]">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/my-next-project/src/pages/privacy.js" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-purple-700 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-purple-700 sm:text-center ">
            © 2025{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Franca Unltd
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
