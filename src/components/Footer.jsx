import React from 'react';
import { PiFlowerLotusLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative bg-stone-800 text-white py-9 font-inknut">
      {/* Logo y texto debajo en la esquina superior izquierda */}
      <div className="absolute top-6 left-4 flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-2">
          <div className="text-5xl text-white">
            <PiFlowerLotusLight />
          </div>
          <div className="text-3xl text-white">
            LOTUS
          </div>
        </div>
        {/* Texto debajo del logo */}
        <div className="text-white ">
          Inspirando con cada pétalo.
        </div>
      </div>

      {/* Contenido principal del footer con padding para que no choque con el logo */}
      <div className="container mx-3 flex justify-end items-center pl-40"> {/* pl-40 agrega espacio a la izquierda */}
        <div className="flex space-x-4">
          {/* Sección de Páginas */}
          <div className="text-left font-bold px-10">
            Páginas
            <a href='#' className="mt-5 font-normal py-1 block">Inicio</a>
            <a href='#' className="mt-2 font-normal py-1 block">Catálogo</a>
            <a href='#' className="mt-2 font-normal py-1 block">Contacto</a>
            <a href='#' className="mt-2 font-normal py-1 block">Iniciar Sesión</a>
            {/*
            <a href='#' className="mt-2 font-normal py-1 block">Perfil</a>
            */}
          </div>
          
          {/* Sección de Información Legal */}
          <div className="text-left font-bold px-10">
            Información Legal
            <a href='#' className="mt-5 font-normal py-1 block">Política de Privacidad</a>
            <a href='#' className="mt-2 font-normal py-1 block">Términos y Condiciones</a>
          </div>

          {/* Sección de Contacto con iconos de redes sociales */}
          <div className="text-left font-bold px-10">
            Contáctanos
            <div className="flex space-x-2 items-center mt-2">
              {/* Botón de correo */}
              <button className="mt-5 text-4xl">
                <MdOutlineMail />
              </button>
              {/* Botón de Instagram */}
              <button className="mt-5 flex text-4xl">
                <FaInstagram />
              </button>
              {/* Botón de Facebook */}
              <button className="mt-5 flex text-3xl">
                <FaFacebook />
              </button>
              {/* Botón de YouTube */}
              <button className="mt-5 flex text-4xl">
                <LuYoutube />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}