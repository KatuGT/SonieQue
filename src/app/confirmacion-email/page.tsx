"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const ConfirmacionEmail = () => {
  const param = useSearchParams();

  const token = param.get("token");
  console.log(token);

  const confirmRegister = async () => {
    try {
      const response = await axiosInstance.post(`/confirm-registration?token=${token}`, );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      confirmRegister();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <section className="max-w-6xl mx-auto"></section>;
};

export default ConfirmacionEmail;
