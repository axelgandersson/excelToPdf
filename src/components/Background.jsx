import React from 'react';

function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-aurora-1"></div>
      <div className="absolute top-[20%] right-[5%] w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-aurora-2"></div>
      <div className="absolute bottom-[5%] left-[20%] w-72 h-72 bg-sky-500/30 rounded-full blur-3xl animate-aurora-3"></div>
    </div>
  );
}

export default Background;
