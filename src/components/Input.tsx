import React from "react";

const Input = () => {
  return (
      <input
        placeholder="Имя"
        className={`w-full bg-none rounded-none border-0 border-b bg-transparent pb-3 font-light leading-[1em] tracking-[-.06em] text-white outline-none placeholder:font-light placeholder:text-white placeholder:text-opacity-80 focus:placeholder:text-opacity-60 lg:pb-2 lg:text-lg lg:leading-[1.5]`}
      />
  );
};

export default Input;
