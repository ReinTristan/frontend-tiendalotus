import React from "react";
import { PiFlowerLotusLight } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from "../assets/ImageHome.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="bg-cover bg-center h-96">
        <div className="flex flex-col justify-center items-center">
          {/* Icono encima del texto */}
          <div className="text-[20rem] text-orange-500 mb-0">
            {/* Ajusta el tamaño del ícono */}
            <PiFlowerLotusLight />
          </div>
          <h2 className="text-[6rem] text-white font-inknut -mt-20">LOTUS</h2>
          {/* Ajusta el tamaño del texto aquí */}
        </div>
      </div>
      {/* Tarjetas debajo del banner */}
      <div className="flex justify-center space-x-52 my-5 font-inria text-2xl">
        <div className="rounded-2xl px-8 pb-3 bg-stone-500 w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lobortis aliquet faucibus. Nulla gravida ligula.
          </p>
        </div>
        <div className="rounded-2xl px-8 pb-3 bg-stone-500 shadow-lg w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lobortis aliquet faucibus. Nulla gravida ligula.
          </p>
        </div>
        <div className="rounded-2xl px-8 pb-3 bg-orange-500 shadow-lg w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2">Revisa Nuestro Catalogo</p>
          <p>→</p>
        </div>
      </div>
      {/* Texto centrado al final */}
      <div className="mt-5 text-center text-white text-2xl font-inria px-96">
        <p>
          Proin velit libero, placerat dapibus mauris a, porta porttitor lorem.
          Aenean neque mi, tincidunt et auctor vitae, pulvinar a massa. Maecenas
          erat lectus, sollicitudin id auctor at, lobortis eget urna. Nam a
          laoreet elit. Aliquam malesuada cursus aliquet. Aenean quis massa
          congue, semper nunc sed, tempor nulla.
        </p>
      </div>
      <div className="mt-10 mb-10 text-center text-white text-4xl font-inria px-96 font-bold">
        <p>Tenemos mas de 12.000 clientes satisfechos</p>
      </div>
      {/*Tarjetas reviews */}
      <div className="flex justify-center  my-5 font-inria text-2xl">
        <div className="mt-4 h-48 rounded-l-2xl px-8 pb-3 bg-stone-500 w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-s mt-3 text-white">
            <FaCircleUser className="-ml-28 text-5xl mr-3" />
            Lorem Ipsum
          </div>
          {/* Iconos adicionales centrados */}
          <div className="text-xl flex items-center space-x-2 -mt-4 -ml-28">
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
          </div>
        </div>
        <div className="h-56 rounded-2xl px-8 pb-3 bg-orange-500 w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-s mt-3 ">
            <FaCircleUser className="-ml-28 text-5xl mr-3" />
            Lorem Ipsum
          </div>
          {/* Iconos adicionales centrados */}
          <div className="text-xl flex items-center space-x-2 -mt-4 -ml-28">
            <FaStar className=" ml-14" />
            <FaStar className="ml-14" />
            <FaStar className="ml-14" />
            <FaStar className=" ml-14" />
            <FaStar className="ml-14" />
          </div>
        </div>
        <div className="mt-4 h-48 rounded-r-2xl px-8 pb-3 bg-stone-500 w-1/5 flex flex-col justify-center items-center">
          <p className="mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex justify-s mt-3 text-white">
            <FaCircleUser className="-ml-28 text-5xl mr-3" />
            Lorem Ipsum
          </div>
          {/* Iconos adicionales centrados */}
          <div className="text-xl flex items-center space-x-2 -mt-4 -ml-28">
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
            <FaStar className="text-orange-400 ml-14" />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-white text-4xl font-inria px-96 font-bold">
        <p>Pongamonos en Contacto</p>
      </div>
      {/* Banner al final */}
      <div
        className="bg-cover bg-center min-h-[800px] rounded-2xl my-10 mx-20 flex items-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="ml-32 flex flex-col justify-center items-left w-full">
          {/* Icono encima del texto */}
          <div className="text-[20rem] mb-0">
            <PiFlowerLotusLight />
          </div>
          <h2 className="text-[6rem] font-inknut -mt-20 -ml-10">LOTUS</h2>
          {/* Ajusta el tamaño del texto aquí */}
        </div>
        {/* Tarjeta con Formulario */}
    <div className="bg-stone-500 bg-opacity-85 px-10 py-10 rounded-2xl shadow-lg w-1/4 mr-10 text-white font-inria text-2xl">  {/* Tarjeta con campos de texto y botón */}
      {/* Campos de texto y botón organizados verticalmente */}
      <form className="flex flex-col space-y-10">  {/* Espacio vertical entre los elementos */}
        <input 
          type="text" 
          placeholder="Nombre" 
          className="p-4 border bg-stone-500 bg-opacity-95 placeholder-white border-stone-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          className="p-4 border bg-stone-500 bg-opacity-95 placeholder-white border-stone-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea 
          placeholder="Mensaje" 
          className="px-3 pt-3 pb-32 bg-stone-500 bg-opacity-95 placeholder-white border-stone-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button 
          type="submit" 
          className="bg-orange-500 text-white font-bold py-3 rounded-2xl hover:bg-orange-600 transition-all">
          Enviar
        </button>
      </form>
    </div>
      </div>
    </div>
  );
}
