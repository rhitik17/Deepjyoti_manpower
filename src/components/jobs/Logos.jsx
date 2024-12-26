import React from "react";

const Logos = () => {
  return (
    <div className="w-full px-10 py-10 bg-primary-web text-white font-bold">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center text-center">
        <div>Spotify</div>
        <div>Slack</div>
        <div>Adobe</div>
        <div>Asana</div>
        <div>Linear</div>
      </div>
    </div>
  );
};

export default Logos;
