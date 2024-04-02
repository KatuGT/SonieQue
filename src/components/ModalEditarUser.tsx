import {
  Avatar,
  Button,
  Radio,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  RadioGroup,
  Input,
} from "@nextui-org/react";
import EditIcon from "@mui/icons-material/Edit";
import { userProps } from "@/tipos/userTipos";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { userEditSchema } from "@/utils/formulSchemas/userEditSchema";

interface userPatchProps {
  nickName: string;
  imageProfile: string;
  borderColorImg: string;
}

const ModalEditarUser = ({
  isOpen,
  onOpenChange,
  currentUserDAta,
}: {
  isOpen: any;
  onOpenChange: any;
  currentUserDAta: userProps;
}) => {
  const profileImage = currentUserDAta?.imageProfile
    ? currentUserDAta?.imageProfile
    : "/profile-pictures/anonimo-1.jpeg";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<userPatchProps>({
    resolver: zodResolver(userEditSchema),
  });

  const [error, setError] = useState("");

  const onSubmitEdit = async (data: userPatchProps) => {
    console.log(data);

    setError("");
  };

  const coloresBorde = [
    {
      displayName: "Gris",
      value: "default",
    },
    {
      displayName: "Azul",
      value: "primary",
    },
    {
      displayName: "Lila",
      value: "secondary",
    },
    {
      displayName: "Verde",
      value: "success",
    },
    {
      displayName: "Amarillo",
      value: "warning",
    },
    {
      displayName: "Rojo",
      value: "danger",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      className="text-gray-200"
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmitEdit)}>
            <ModalHeader className="flex flex-col gap-1">
              Editá tu perfil
            </ModalHeader>
            <ModalBody>
              <Avatar
                isBordered
                color="secondary"
                className="w-20 h-20 text-large"
                radius="sm"
                src={profileImage}
              />

              <Controller
                name="imageProfile"
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    endContent={
                      <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Imagen de perfil"
                    placeholder="Katudev"
                    variant="bordered"
                    type="file"
                    {...field}
                  />
                )}
              />

              <Controller
                name="borderColorImg"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    label="Color de borde"
                    orientation="horizontal"
                    color="secondary"
                    {...field}
                  >
                    {coloresBorde.map((color) => (
                      <Radio value={color.value} key={color.value}>
                        {color.displayName}
                      </Radio>
                    ))}
                  </RadioGroup>
                )}
              />

              <Controller
                name="nickName"
                control={control}
                render={({ field }) => (
                  <Input
                    autoFocus
                    endContent={
                      <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Nombre / Apodo"
                    placeholder="Katudev"
                    variant="bordered"
                    {...field}
                  />
                )}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" type="submit">
                Guardar
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalEditarUser;
