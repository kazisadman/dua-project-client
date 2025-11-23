"use client";

import { useFetchData } from "@/store/useFetchData";

const Loader = () => {
  const { loading } = useFetchData();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen flex-center justify-center z-20">
      <div className="absolute w-6 h-6 border-4 border-t-transparent rounded-full animate-spin z-30"></div>
      <div className="fixed inset-0 bg-white"></div>
    </div>
  );
};

export default Loader;
