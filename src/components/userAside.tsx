import {
  Listbox,
  ListboxSection,
  ListboxItem,
  Avatar,
  Chip,
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

const UserAside = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
       {/* Versión mobile */}
      <div className="hidden md:block">
        <div className="flex items-center gap-4">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large mb-2 shrink-0"
          />
          <span className="break-all">katu93dev</span>
        </div>
        <Divider className="my-4" />
        <Listbox variant="shadow" color="secondary" aria-label="Actions">
          <ListboxItem
            key="editarPerfil"
            startContent={<EditIcon className="text-md" />}
          >
            <Link href="/perfilConf/editar" color="foreground" as={nextLink}>
              Editar perfil
            </Link>
          </ListboxItem>
          <ListboxItem
            key="misSuenios"
            startContent={<AutoAwesomeIcon className="text-md" />}
          >
            <Link href="/perfilConf/misSuenios" color="foreground" as={nextLink}>
              Mis sueños
            </Link>
          </ListboxItem>
          <ListboxItem
            key="misFavoritos"
            startContent={<LoyaltyIcon className="text-md" />}
          >
            <Link href="/perfilConf/misFavoritos" color="foreground" as={nextLink}>
              Mis favoritos
            </Link>
          </ListboxItem>
          <ListboxItem
            key="cerrarSesion"
            startContent={<MeetingRoomIcon className="text-md" />}
          >
            <Link href="/" color="foreground" as={nextLink}>
              Cerrar sesión
            </Link>
          </ListboxItem>
        </Listbox>
        <Divider className="my-4" />

        <Listbox variant="shadow" color="secondary" aria-label="Actions">
          <ListboxItem key="sobreNosotros">
            <Link
              href="/"
              color="foreground"
              as={nextLink}
              className="hover:text-white"
            >
              Sobre nosotros
            </Link>
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
          className="top-[-40%]"
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
                  >
                    <Link href="/perfilConf/editar" color="foreground" as={nextLink}>
                      Editar perfil
                    </Link>
                  </ListboxItem>
                  <ListboxItem
                    key="misSuenios"
                    startContent={<AutoAwesomeIcon className="text-md" />}
                  >
                    <Link href="/perfilConf/misSuenios" color="foreground" as={nextLink}>
                      Mis sueños
                    </Link>
                  </ListboxItem>
                  <ListboxItem
                    key="misFavoritos"
                    startContent={<LoyaltyIcon className="text-md" />}
                  >
                    <Link href="/perfilConf/misFavoritos" color="foreground" as={nextLink}>
                      Mis favoritos
                    </Link>
                  </ListboxItem>
                  <ListboxItem
                    key="cerrarSesion"
                    startContent={<MeetingRoomIcon className="text-md" />}
                  >
                    <Link href="/" color="foreground" as={nextLink}>
                      Cerrar sesión
                    </Link>
                  </ListboxItem>
                </Listbox>
                <Divider className="my-2" />

                <Listbox
                  variant="shadow"
                  color="secondary"
                  aria-label="Actions"
                >
                  <ListboxItem key="sobreNosotros">
                    <Link
                      href="/"
                      color="foreground"
                      as={nextLink}
                      className="hover:text-white"
                    >
                      Sobre nosotros
                    </Link>
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
