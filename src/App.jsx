import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const limpiar = () => {
  setInput("");
};

const borrar = () => {
  setInput(input.slice(0, -1));
};

const agregarInput = (valor) => {
  setInput(input + valor);
};

  return (

    
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      {/* TITULO */}
      <h1 className="text-5xl font-bold mb-8">calc</h1>

      {/* CALCULADORA */}
      <div className="bg-gray-300 w-87.5 p-5 rounded-2xl shadow-xl">
        {/* PANTALLA */}
        <div className="bg-white h-24 rounded-2xl mb-5 flex items-center justify-end px-5 text-5xl font-bold">
          {input || "0"}
        </div>

        {/* BOTONES */}
        <div className="grid grid-cols-4 gap-4">
          <button onClick={() => agregarInput("7")} className="btn">7</button>
          <button onClick={() => agregarInput("8")} className="btn">8</button>
          <button onClick={() => agregarInput("9")} className="btn">9</button>
          <button onClick={borrar} className="bg-emerald-800 text-white ">
            DEL
          </button>

          <button onClick={() => agregarInput("4")} className="btn">4</button>
          <button onClick={() => agregarInput("5")} className="btn">5</button>
          <button onClick={() => agregarInput("6")} className="btn">6</button>
          <button onClick={() => agregarInput("+")} className="btn">+</button>

          <button onClick={() => agregarInput("1")} className="btn">1</button>
          <button onClick={() => agregarInput("2")} className="btn">2</button>
          <button onClick={() => agregarInput("3")} className="btn">3</button>
          <button onClick={() => agregarInput("-")} className="btn">-</button>

          <button onClick={() => agregarInput(".")} className="btn">.</button>
          <button onClick={() => agregarInput("0")} className="btn">0</button>
          <button onClick={() => agregarInput("/")} className="btn">/</button>
          <button onClick={() => agregarInput("x")} className="btn">x</button>

          <button onClick={limpiar} className="col-span-2 bg-cyan-700 text-white p-4 rounded-xl text-2xl font-bold">
            RESET
          </button>

          <button className="col-span-2 bg-orange-600 text-white p-4 rounded-xl text-2xl font-bold">
            =
          </button>
        </div>
      </div>

      {/* TEXTO ABAJO */}
      <p className="mt-10 font-bold">Made with ❤️ by Stefania</p>
    </div>
  );
}

export default App;
