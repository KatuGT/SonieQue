"use client";

import { Button, Tooltip } from "@nextui-org/react";
import React, { use, useEffect, useState } from "react";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import { useUserStore } from "@/store/user";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useSWRConfig } from "swr";

const token = Cookies.get("token");

const LikesActions = ({ postId }: { postId: number }) => {
  const user = useUserStore((state) => state.user);

  const [like, setLike] = useState("none");
  const { mutate } = useSWRConfig();

  const handleLike = async (likeType: "LIKE" | "DISLIKE") => {
    setLike(likeType);
    try {
      const response = await axiosInstance.post(
        "/user/like_dream",
        {
          postId,
          likeType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      mutate("/public/latest_posts");
      console.log(response.data);
      if (response.data === "like assigned") {
        mutate("/user/get_user_auth");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      const dream = user.likeDreams.filter((like) => like.id === postId);
      setLike(dream[0]?.likesType);
    }
  }, [postId, user]);

  return (
    <>
      <div className="flex gap-1 flex-col justify-center items-center">
        <Tooltip content={user ? "Voto positivo" : "Inicia sesión"}>
          <Button
            isIconOnly
            color="success"
            className="text-xl"
            aria-label="Me gusta este sueño"
            variant={like === "LIKE" ? "shadow" : "bordered"}
            onClick={() => handleLike("LIKE")}
            disabled={!user}
          >
            <PiArrowFatUpFill />
          </Button>
        </Tooltip>
      </div>

      <div className="flex gap-1 flex-col justify-center items-center">
        <Tooltip content={user ? "Voto negativo" : "Inicia sesión"}>
          <Button
            isIconOnly
            color="warning"
            className="text-xl"
            aria-label="No me gusta este sueño"
            variant={like === "DISLIKE" ? "shadow" : "bordered"}
            onClick={() => handleLike("DISLIKE")}
            disabled={!user}
          >
            <PiArrowFatDownFill />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default LikesActions;
