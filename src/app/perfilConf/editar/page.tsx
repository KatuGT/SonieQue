"use client";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Chip,
  Divider,
  Link,
  Spacer,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import nextLink from "next/link";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EditIcon from "@mui/icons-material/Edit";
import useUser from "@/customHooks/useUser";
import { formateadorFecha } from "@/utils/formatearFecha";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import UserEdit from "@/components/perfilConfig/editar/UserEdit";
import useUserSuenios from "@/customHooks/useSuenios";

const EditarPerfil = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useUser();

  const profileImage = data?.imageProfile
    ? data?.imageProfile
    : "/profile-pictures/anonimo-1.jpeg";

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    router.refresh();
  };


  return (
    <div className="px-4 flex flex-col gap-4 backdrop-blur-sm p-1 rounded-sm overflow-hidden mb-10">
      <section className="flex gap-4 items-center">
        <Avatar
          isBordered
          color={data?.borderColorImg}
          className="w-20 h-20 text-large"
          radius="sm"
          src={profileImage}
        />
        <div>
          <h3 className="text-4xl">
            {data?.nickName ? data?.nickName : data?.email}
          </h3>
          <span className="text-xs">
            Miembro desde {formateadorFecha(data?.creationDate)}
          </span>
        </div>
      </section>
      <Chip color="success" variant="dot">
        E-mail: {data?.email}
      </Chip>

      <section>
        <p>
          Has publicado{" "}
          <Link as={nextLink} href="misSuenios">
            {data?.postDreams?.length} sueños
          </Link>{" "}
          desde que te uniste
        </p>

        <p>
          Tenes guardados{" "}
          <Link as={nextLink} href="misSuenios">
            0 sueños
          </Link>{" "}
          en tu lista de favoritos
        </p>
      </section>

      <Accordion itemClasses={{ title: "text-success" }}>
        <AccordionItem
          key="1"
          aria-label="Editar"
          title="Editar"
          startContent={<EditIcon className="text-success" />}
        >
          <UserEdit currentUserData={data} />
        </AccordionItem>
      </Accordion>

      <Divider />

      <div className="flex flex-col items-start">
        <Button
          color="default"
          variant="bordered"
          startContent={<MeetingRoomIcon />}
          onClick={handleLogout}
        >
          Cerrar sesión
        </Button>
        <Spacer y={32} />

        <Tooltip color="danger" content="100% permanente, pensalo bien!">
          <Button
            className="self-end"
            size="sm"
            color="danger"
            variant="bordered"
            startContent={<MoodBadIcon />}
          >
            Borrar cuenta para siempre
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default EditarPerfil;
