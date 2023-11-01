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

const UserAside = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      {/* Versión mobile */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            isBordered
            color="secondary"
            className="w-12 h-15 text-large text-gray-200"
            radius="sm"
          />
          <span className="break-all text-gray-200 ">katu93dev</span>
        </div>
        <Divider className="my-4" />
        <Listbox variant="shadow" color="secondary" aria-label="Actions">
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
            as={nextLink}
            href="auth"
            className="text-gray-200"
          >
            Cerrar sesión
          </ListboxItem>
        </Listbox>
        <Divider className="my-4" />

        <Listbox variant="shadow" color="secondary" aria-label="Actions">
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
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-20 h-20 text-large mb-2 shrink-0"
                  />
                  <span className="break-all">katu93dev</span>
                </div>
                <Divider className="my-2" />
                <Listbox
                  variant="shadow"
                  color="secondary"
                  aria-label="Actions"
                >
                  <ListboxItem
                    key="editarPerfil"
                    startContent={<EditIcon className="text-md" />}
                    as={nextLink}
                    href="/perfilConf/editar"
                  >
                    Editar perfil
                  </ListboxItem>
                  <ListboxItem
                    key="misSuenios"
                    startContent={<AutoAwesomeIcon className="text-md" />}
                    as={nextLink}
                    href="/perfilConf/misSuenios"
                  >
                    Mis sueños
                  </ListboxItem>
                  <ListboxItem
                    key="misFavoritos"
                    startContent={<LoyaltyIcon className="text-md" />}
                    as={nextLink}
                    href="/perfilConf/misFavoritos"
                  >
                    Mis favoritos
                  </ListboxItem>
                  <ListboxItem
                    key="cerrarSesion"
                    startContent={<MeetingRoomIcon className="text-md" />}
                    as={nextLink}
                    href="auth"
                  >
                    Cerrar sesión
                  </ListboxItem>
                </Listbox>
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
    </div>
  );
};

export default UserAside;
