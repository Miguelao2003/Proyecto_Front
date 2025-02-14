import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Analisis de la Empresa</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardTicket category="sucursales" total="15" text="Total de Sucursales" />
        <CardTicket category="clientes" total="5000" text="Clientes Registrados" />
        <CardTicket category="ventas" total="1200" text="Ventas Realizadas" />
        <CardTicket category="ingresos" total="$15,000" text="Ingresos Totales" />
        <CardTicket category="inventario" total="350" text="Stock en Inventario" />
        <CardTicket category="productos" total="75" text="Productos en Catálogo" />
        <CardTicket category="cajas" total="3" text="Cajas Activas" />
      </div>
    </div>
  );
};

export default Home;
