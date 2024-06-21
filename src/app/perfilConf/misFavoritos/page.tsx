"use client";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import CardSuenio from "@/components/cardSuenio/cardSueño";

const MisFavoritos = () => {
  const [selected, setSelected] = useState("todos");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="flex flex-col gap-4 px-4 mb-10">
      <RadioGroup value={selected} onValueChange={setSelected}>
        <Radio value="todos">Ver todos</Radio>
        <Radio value="anonimos">Solo anónimos</Radio>
        <Radio value="publicos">Solo públicos</Radio>
      </RadioGroup>
      <section className="grid gap-16">
        <div className="flex gap-4 flex-col">
          {/* <CardSuenio
                  isUser={true}
                  suenio={suenio.story}
                  fecha={suenio.creationDate}
                  categorias={suenio.categories}
                  suenioId={suenio.id}
                  isAnonymous={suenio.anonymous}
                  userImg={suenio.userImgAvatarUrl}
                  userNickname={suenio.nickNameUser}
                /> */}
          <p className="text-xs text-gray-50">
            Agregado a favoritos hace 2 horas
          </p>
        </div>
      </section>
    </section>
  );
};

export default MisFavoritos;
