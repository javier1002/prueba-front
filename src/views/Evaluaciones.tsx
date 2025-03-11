import { useState } from "react";
import { FaChevronDown, FaDownload, FaFileAlt, FaShareAlt, FaUpload, FaRegBookmark, FaCheck } from "react-icons/fa";

const estudiantesSimulados = ["Juan Pérez", "María Gómez", "Carlos Rodríguez", "Ana Ramírez"];

const Evaluaciones = () => {
  const [estudiante, setEstudiante] = useState("");
  const [materia, setMateria] = useState("");
  const [rubrica, setRubrica] = useState("");
  const [sugerencias, setSugerencias] = useState<string[]>(estudiantesSimulados);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [archivo, setArchivo] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setEstudiante(valor);
    setSugerencias(
      valor.length > 0
        ? estudiantesSimulados.filter((nombre) => nombre.toLowerCase().includes(valor.toLowerCase()))
        : estudiantesSimulados
    );
  };

  const handleArchivo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArchivo(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-[800px] flex flex-col">
      
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold border-b-2 border-red-500 pb-1">Evaluaciones</h1>

        
        <div className="flex gap-6">
          <label className="cursor-pointer">
            <input type="file" className="hidden" onChange={handleArchivo} />
            <FaUpload className="text-gray-600 cursor-pointer text-2xl hover:text-gray-800 transition" />
          </label>
          <FaDownload className="text-gray-600 cursor-pointer text-2xl hover:text-gray-800 transition" />
          <FaFileAlt className="text-gray-600 cursor-pointer text-2xl hover:text-gray-800 transition" />
          <FaShareAlt className="text-gray-600 cursor-pointer text-2xl hover:text-gray-800 transition" />
        </div>
      </div>

      
      <div className="space-y-6 flex-grow">
        {/* Estudiante */}
        <div className="relative">
          <label className="font-semibold block mb-1">Estudiante:</label>
          <input
            type="text"
            value={estudiante}
            onChange={handleChange}
            placeholder="Nombre estudiante"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            onFocus={() => setMostrarLista(true)}
          />
          <FaChevronDown
            className="absolute right-3 top-11 text-gray-500 cursor-pointer"
            onClick={() => setMostrarLista(!mostrarLista)}
          />
          {mostrarLista && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
              {sugerencias.map((sug, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setEstudiante(sug);
                    setMostrarLista(false);
                  }}
                >
                  {sug}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Materia */}
        <div>
          <label className="font-semibold block mb-1">Materia:</label>
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingrese el nombre de la materia"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Rúbrica */}
        <div>
          <label className="font-semibold block mb-1">Rúbrica:</label>
          <input
            type="text"
            value={rubrica}
            onChange={(e) => setRubrica(e.target.value)}
            placeholder="Nombre de rúbrica"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          />
        </div>

        {/* Periodo */}
        <div>
          <label className="font-semibold block mb-1">Periodo:</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm">
            <option>Seleccione</option>
            <option>2024-1</option>
            <option>2024-2</option>
          </select>
        </div>
      </div>

      {/* boton para guardar */}
      <div className="mt-8 flex justify-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md text-lg font-semibold hover:bg-green-700 transition">
          <FaRegBookmark className="text-xl" />
          <span>Guardar</span>
          <FaCheck className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Evaluaciones;
