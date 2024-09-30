import React, { useState } from "react";
import Image from "../assets/ImageLogin.jpg";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar el formulario mostrado

  return (
    <div className="pt-10 pb-16 flex items-center justify-evenly bg-black">
      <div className="w-1/4 -ml-10">
        <img
          src={Image}
          alt="Imagen redondeada"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>

      {/* Contenedor principal con flexbox */}
      <div className=" font-inria text-white mr-40 bg-transparent shadow-lg rounded-2xl flex overflow-hidden max-w-4xl justify-center">
        {/* Formulario de Login o Registro */}
        <div className="p-12 flex flex-col justify-center w-full max-w-md"> {/* Ancho fijo para el contenedor */}
          {isRegistering ? ( // Condicional para mostrar el formulario correspondiente
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">Registrarse</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-2xl mb-1" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-2xl mb-1" htmlFor="new-email">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="new-email"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-2xl mb-1" htmlFor="new-password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="* * * * * * * *"
                  />
                </div>

                <div>
                  <label className="block text-2xl mb-1" htmlFor="confirm-password">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="* * * * * * * *"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 mb-5 bg-orange-500 rounded-2xl text-black text-2xl hover:bg-white transition duration-200"
                >
                  Registrarse
                </button>
              </form>
              <div className="relative flex pt-5 mt-10 items-center flex-grow border-t border-stone-500"></div>
              {/* Texto de inicio de sesión debajo del formulario */}
              <div className="text-center">
                <p className="font-inria text-white">
                  ¿Ya tienes cuenta? 
                  <a onClick={() => setIsRegistering(false)} className="text-blue-500 hover:underline cursor-pointer"> Inicia sesión aquí</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-2xl mb-1" htmlFor="email">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-2xl mb-1" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 rounded-2xl bg-stone-500 placeholder-white  focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="* * * * * * * *"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 mb-5 bg-orange-500 rounded-2xl text-black text-2xl hover:bg-white transition duration-200"
                >
                  Iniciar Sesión
                </button>
              </form>
              <div className="relative flex py-5 mt-10 items-center flex-grow border-t border-stone-500"></div>
              {/* Texto de registro debajo del formulario */}
              <div className="text-center">
                <p className="font-inria text-white">
                  No tienes cuenta? 
                  <a onClick={() => setIsRegistering(true)} className="text-blue-500 hover:underline cursor-pointer"> Regístrate aquí</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}