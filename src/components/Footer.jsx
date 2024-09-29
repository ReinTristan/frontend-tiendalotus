import React from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { Link, Navigate } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-stone-800 text-white py-9 font-inknut">
      {/* Logo y texto debajo en la esquina superior izquierda */}
      <div className="absolute top-6 left-4 flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-2">
          <div className="text-5xl text-white">
            <PiFlowerLotusLight />
          </div>
          <div className="text-3xl text-white">LOTUS</div>
        </div>
        {/* Texto debajo del logo */}
        <div className="text-white ">Inspirando con cada pétalo.</div>
      </div>

      {/* Contenido principal del footer con padding para que no choque con el logo */}
      <div className="container mx-3 flex justify-end items-center pl-40">
        {" "}
        {/* pl-40 agrega espacio a la izquierda */}
        <div className="flex space-x-4">
          {/* Sección de Páginas */}
          <div className="text-left font-bold px-10">
            Páginas
            <Link
              to="/"
              className="mt-5 font-normal py-1 block hover:text-stone-300"
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className="mt-2 font-normal py-1 block hover:text-stone-300"
            >
              Catalogo
            </Link>
            <Link
              to="/"
              className="mt-2 font-normal py-1 block hover:text-stone-300"
            >
              Contacto
            </Link>
            <Link
              to="/login"
              className="mt-2 font-normal py-1 block hover:text-stone-300"
            >
              Iniciar Sesión
            </Link>
            {/*
            <a href='#' className="mt-2 font-normal py-1 block">Perfil</a>
            */}
          </div>

          {/* Sección de Información Legal */}
          <div className="text-left font-bold px-10">
            Información Legal
            <Link
              to="/"
              className="mt-5 font-normal py-1 block hover:text-stone-300"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/"
              className="mt-2 font-normal py-1 block hover:text-stone-300"
            >
              Términos y Condiciones
            </Link>
          </div>

          {/* Sección de Contacto con iconos de redes sociales */}
          <div className="text-left font-bold px-10">
            Contáctanos
            <div className="flex space-x-2 items-center mt-2">
              {/* Botón de correo */}
              <button className="mt-5 text-4xl hover:text-stone-300">
                <MdOutlineMail />
              </button>
              {/* Botón de Instagram */}
              <button className="mt-5 flex text-4xl hover:text-stone-300">
                <FaInstagram />
              </button>
              {/* Botón de Facebook */}
              <button className="mt-5 flex text-3xl hover:text-stone-300">
                <FaFacebook />
              </button>
              {/* Botón de YouTube */}
              <button className="mt-5 flex text-4xl hover:text-stone-300">
                <LuYoutube />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
