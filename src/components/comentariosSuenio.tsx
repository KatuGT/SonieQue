import React from "react";
import { Button, User } from "@nextui-org/react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const ComentariosSuenio = () => {
  return (
    <div className="px-3 py-2 bg-blue-950 rounded-lg">
      <div className={`flex justify-between`}>
        <User
        
          name="Jane Doe"
          description="publicado hace 12 horas"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <Button
          size="sm"
          isIconOnly
          color="danger"
          variant="ghost"
          aria-label="Denuncia este comentario"
        >
          <PriorityHighIcon />
        </Button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
        dolores?
      </p>
    </div>
  );
};

export default ComentariosSuenio;
