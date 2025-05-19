// src/pages/ProductSelection.jsx
import React from "react";
import state from "../store";

import shirt from "../assets/shirt.png";
import shoe  from "../assets/shoe.png";
import cap   from "../assets/cap.png";

const products = [
  { key: "shirt", label: "Camisetas", img: shirt },
  { key: "shoe",  label: "Zapatos",   img: shoe  },
  { key: "cap",   label: "Gorras",    img: cap   },
];

export default function ProductSelection() {
  return (
    <div className="w-full min-h-screen bg-white text-black px-16 py-8 relative">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-4xl font-bold">SELECCIÓN DEL PRODUCTO</h1>
        </div>
        <button
          onClick={() => {
            state.step = "home";
            state.intro = true; 
          }}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          Volver
        </button>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-3 gap-12">
        {products.map((p) => (
          <button
            key={p.key}
            onClick={() => {
              state.product = p.key;
              state.step = "customize";
            }}
            className="
              bg-[#2EB5FF] 
              rounded-2xl 
              p-10 
              w-full 
              h-[70vh] 
              flex 
              flex-col 
              items-center 
              justify-center 
              hover:scale-105 
              transition-transform 
              shadow-xl
            "
          >
            {/* Aumentamos la imagen */}
            <img
              src={p.img}
              alt={p.label}
              className="w-64 h-64 object-contain mb-6"
            />
            <h2 className="text-2xl font-semibold text-white mb-2">
              {p.label}
            </h2>
            <div className="text-white text-lg flex items-center gap-2">
              <span>Explora ahora</span>
              <span className="text-2xl">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
