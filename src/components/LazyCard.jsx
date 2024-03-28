import React from "react";

const LazyCard = ({ item, handleClick }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-clip-border text-gray-700 shadow-md" style={{ background: "#fff" }}>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          rowGap: "1.2rem",
          columnGap: "1rem",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={item.image}
          alt=""
          className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r object-contain"
        />
      </div>

      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {item.header}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {item.description}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center">
        <button
          onClick={() => handleClick(item.url)}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {item.btntitle}
        </button>
      </div>
    </div>
  );
};

export default LazyCard;
