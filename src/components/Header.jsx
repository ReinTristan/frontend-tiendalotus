import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { PiFlowerLotusLight } from "react-icons/pi";
export default function Header() {
	return (
    <header className="bg-black text-stone-500 font-title">
      <div className="flex justify-between items-center p-2">
        {/* Contenedor del logo e imagen */}
        <div className="flex space-x-2 px-3 items-center"> {/* Usa space-x-2 para reducir el espacio */}
          {/* Imagen al lado del logo */}
          <div className="text-5xl text-orange-500">
          <PiFlowerLotusLight />
          </div>
          {/* Logo */}
          <div className="text-3xl text-white">
            LOTUS
          </div>
        </div>

        {/* Menú de navegación */}
        <nav>
          <ul className="flex space-x-6 font-title text-2xl">
            <li>
              <a href="/" className="hover:text-white">Inicio</a>
            </li>
            <li> 
              |
            </li>
            <li>
              <a href="/about" className="hover:text-white">Catalogo</a>
            </li>
            <li> 
              |
            </li>
            <li>
              <a href="/services" className="hover:text-white">Contacto</a>
            </li>
            <li> 
              |
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Iniciar Sesión</a>
            </li>
            {/*<li>
              <a href="/contact" className="hover:text-white">Perfil</a>
            </li>*/}
            {/*<li>
              <a href="/contact" className="hover:text-white">Administrar</a>
            </li>*/}
          </ul>
        </nav>

        {/* Botón de acción */}
        <div>
          <button className=" text-white text-4xl px-3">
          <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </header>
  );
};