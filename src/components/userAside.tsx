import {
  Listbox,
  ListboxSection,
  ListboxItem,
  Avatar,
  Chip,
  Divider,
} from "@nextui-org/react";
import EditIcon from "@mui/icons-material/Edit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const UserAside = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-20 h-20 text-large mb-2"
        />
        <Chip
          variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white break-words",
          }}
        >
          Katu93
        </Chip>
      </div>
      <Divider className="my-4" />
      <Listbox
        variant="shadow"
        color="secondary"
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new" startContent={<EditIcon className="text-md" />}>
          Editar perfil
        </ListboxItem>
        <ListboxItem
          key="copy"
          startContent={<AutoAwesomeIcon className="text-md" />}
        >
          Mis sueños
        </ListboxItem>
        <ListboxItem
          key="edit"
          startContent={<LoyaltyIcon className="text-md" />}
        >
          Mis favoritos
        </ListboxItem>
        <ListboxItem
          key="delete"
          startContent={<MeetingRoomIcon className="text-md" />}
          className="text-danger"
          color="danger"
        >
          Cerrar sesión
        </ListboxItem>
      </Listbox>
      <Divider className="my-4" />
    </div>
  );
};

export default UserAside;
