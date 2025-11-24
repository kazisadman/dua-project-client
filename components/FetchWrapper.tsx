"use client";
import { useFetchData } from "@/store/useFetchData";
import { ReactNode, useEffect } from "react";

const FetchWrapper = ({ children }: { children: ReactNode }) => {
  const { fetchAll } = useFetchData();

  
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default FetchWrapper;
