"use client";
import {
  Listbox,
  ListboxItem,
  Avatar,
  Divider,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import EditIcon from "@mui/icons-material/Edit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import nextLink from "next/link";
import Person3Icon from "@mui/icons-material/Person3";
import useUser from "@/customHooks/useUser";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
import { userProps } from "@/tipos/userTipos";
import { useSWRConfig } from "swr";
import { useUserStore } from "@/store/user";

const UserAside = ({ data }: { data: userProps | null }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setUser = useUserStore((state) => state.setUser);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    setUser(null);
    redirect("/");
  };

  const profileImage = data?.imageProfile
    ? data?.imageProfile
    : "/profile-pictures/anonimo-1.jpeg";

  return (
    <aside>
      {/* Versión mobile */}
      <div className="hidden md:block">
        {data && (
          <div className="flex items-center gap-4">
            <Avatar
              src={profileImage}
              isBordered
              color={data?.borderColorImg ? data?.borderColorImg : "secondary"}
              className="w-12 h-15 text-large text-gray-200"
              radius="sm"
            />
            <span className="break-all text-gray-200">
              {data?.nickName ? data?.nickName : data?.email}
            </span>
          </div>
        )}
        <Divider className="my-4" />

        {data ? (
          <Listbox
            variant="shadow"
            color="secondary"
            aria-label="Seccion 'para usuarios logueados'"
          >
            <ListboxItem
              key="editarPerfil"
              startContent={<Person3Icon className="text-md" />}
              as={nextLink}
              href="/perfilConf/editar"
              className="text-gray-200 "
            >
              Mi perfil
            </ListboxItem>

            <ListboxItem
              key="misSuenios"
              startContent={<AutoAwesomeIcon className="text-md" />}
              as={nextLink}
              href="/perfilConf/misSuenios"
              className="text-gray-200 "
            >
              Mis sueños
            </ListboxItem>
            <ListboxItem
              key="misFavoritos"
              startContent={<LoyaltyIcon className="text-md" />}
              href="/perfilConf/misFavoritos"
              as={nextLink}
              className="text-gray-200 "
            >
              Mis favoritos
            </ListboxItem>

            <ListboxItem
              key="cerrarSesion"
              startContent={<MeetingRoomIcon className="text-md" />}
              className="text-gray-200"
              onClick={handleLogout}
            >
              Cerrar sesión
            </ListboxItem>
          </Listbox>
        ) : (
          <Listbox
          aria-label="Seccion 'Iniciar sesión'"
          >
            <ListboxItem
              key="cerrarSesion"
              startContent={<MeetingRoomIcon className="text-md" />}
              as={nextLink}
              href="auth"
              className="text-gray-200"
              
            >
              Iniciar sesión
            </ListboxItem>
          </Listbox>
        )}

        <Divider className="my-4" />

        <Listbox
          variant="shadow"
          color="secondary"
          aria-label="Seccion 'Sobre nosotros'"
        >
          <ListboxItem
            key="sobreNosotros"
            href="/"
            as={nextLink}
            className="text-gray-200 "
          >
            Sobre nosotros
          </ListboxItem>
        </Listbox>
      </div>

      {/* Versión desktop */}
      <div className="md:hidden flex justify-end">
        <Button onPress={onOpen} variant="shadow" color="secondary">
          User
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <ModalBody className="py-5">
                <div className="flex items-center gap-4">
                  <Avatar
                    src={profileImage}
                    className="w-20 h-20 text-large mb-2 shrink-0"
                  />
                  <span className="break-all">
                    {data?.nickName ? data?.nickName : data?.email}
                  </span>
                </div>
                <Divider className="my-2" />
                {data ? (
                  <Listbox
                    variant="shadow"
                    color="secondary"
                    aria-label="Actions"
                  >
                    <ListboxItem
                      key="editarPerfil"
                      startContent={<Person3Icon className="text-md" />}
                      as={nextLink}
                      href="/perfilConf/editar"
                      className="text-gray-200 "
                    >
                      Mi perfil
                    </ListboxItem>

                    <ListboxItem
                      key="misSuenios"
                      startContent={<AutoAwesomeIcon className="text-md" />}
                      as={nextLink}
                      href="/perfilConf/misSuenios"
                      className="text-gray-200 "
                    >
                      Mis sueños
                    </ListboxItem>

                    <ListboxItem
                      key="misFavoritos"
                      startContent={<LoyaltyIcon className="text-md" />}
                      href="/perfilConf/misFavoritos"
                      as={nextLink}
                      className="text-gray-200 "
                    >
                      Mis favoritos
                    </ListboxItem>

                    <ListboxItem
                      key="cerrarSesion"
                      startContent={<MeetingRoomIcon className="text-md" />}
                      className="text-gray-200"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </ListboxItem>
                  </Listbox>
                ) : (
                  <Listbox>
                    <ListboxItem
                      key="cerrarSesion"
                      startContent={<MeetingRoomIcon className="text-md" />}
                      as={nextLink}
                      href="auth"
                      className="text-gray-200"
                    >
                      Iniciar sesión
                    </ListboxItem>
                  </Listbox>
                )}
                <Divider className="my-2" />

                <Listbox
                  variant="shadow"
                  color="secondary"
                  aria-label="Actions"
                >
                  <ListboxItem key="sobreNosotros" as={nextLink} href="/">
                    Sobre nosotros
                  </ListboxItem>
                </Listbox>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </div>
    </aside>
  );
};

export default UserAside;
