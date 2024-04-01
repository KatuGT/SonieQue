"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ConfirmacionEmail = () => {
 

  const confirmRegister = async () => {
    try {
      const response = await axiosInstance.get(
        `/confirm-registration?token=ed2c8949-53c5-4453-8d09-87b89bde784b`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    confirmRegister();
  }, []);

  return <section className="max-w-6xl mx-auto"></section>;
};

export default ConfirmacionEmail;
