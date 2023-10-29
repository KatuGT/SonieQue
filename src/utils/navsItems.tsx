import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Person3Icon from "@mui/icons-material/Person3";
import TableChartIcon from '@mui/icons-material/TableChart';
import TimelineIcon from '@mui/icons-material/Timeline';

export const linksUserConf: NavbarArrayProps[] = [
  {
    href: "editar",
    icon: <Person3Icon className="text-md" />,
    text: "Mi perfil",
    rootPath: "/perfilConf",
  },
  {
    href: "misSuenios",
    icon: <AutoAwesomeIcon className="text-md" />,
    text: "Mis sueños",
    rootPath: "/perfilConf",
  },
  {
    href: "misFavoritos",
    icon: <LoyaltyIcon className="text-md" />,
    text: "Mis favoritos",
    rootPath: "/perfilConf",
  },
];

export const linksDashboard: NavbarArrayProps[] = [
  {
    href: "usuarios",
    icon: <TableChartIcon className="text-md" />,
    text: "Usuarios",
    rootPath: "/dashboard",
  },
  {
    href: "estadisticas",
    icon: <TimelineIcon className="text-md" />,
    text: "Estadisticas",
    rootPath: "/dashboard",
  },
];
