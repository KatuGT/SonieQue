"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ConfirmacionEmail = () => {
  const confirmRegister = async () => {
    try {
      const response = await axiosInstance.post(
        `/active-user?email=93katu@gmail.com`
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
