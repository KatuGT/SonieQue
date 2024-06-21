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
import { useState } from "react";
import CardSuenio from "@/components/cardSuenio/cardSueño";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import useSWR from "swr";
import { suenioProps } from "@/tipos/sueniosTipos";
import BorrarMiSuenio from "@/components/perfilConfig/misSuenios/borrarMiSuenio";

const MisSuenios = () => {
  const [selected, setSelected] = useState("todos");

  const { isOpen: isOpenToEdit, onOpen, onOpenChange } = useDisclosure();

  const token = Cookies.get("token");

  const fetcher = async (url: string) => {
    try {
      const response = await axiosInstance(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  const apiUrl = "/user/user_post";

  const {
    data: sueniosUser,
    error: sueniosError,
    isLoading: sueniosIsLoading,
    isValidating: sueniosIsValidating,
    mutate,
  } = useSWR(token ? apiUrl : null, fetcher);

  return (
    <section className="flex flex-col gap-4 px-4 mb-10">
      <RadioGroup value={selected} onValueChange={setSelected}>
        <Radio value="todos">Ver todos</Radio>
        <Radio value="anonimos">Solo anónimos</Radio>
        <Radio value="publicos">Solo públicos</Radio>
      </RadioGroup>
      <section className="grid gap-16">
        {sueniosUser?.length > 0 &&
          sueniosUser?.map((suenio: suenioProps) => {
            return (
              <div
                className="flex gap-4 flex-col md:flex-row"
                key={suenio.id + suenio.creationDate}
              >
                <CardSuenio
                  isUser={true}
                  suenio={suenio.story}
                  fecha={suenio.creationDate}
                  categorias={suenio.categories}
                  suenioId={suenio.id}
                  isAnonymous={suenio.anonymous}
                  userImg={suenio.userImgAvatarUrl}
                  userNickname={suenio.nickNameUser}
                />
                <div className="rounded-lg flex md:flex-col gap-2 ">
                  <BorrarMiSuenio idSuenio={1} />

                  <Button
                    onPress={onOpen}
                    color="warning"
                    variant="ghost"
                    startContent={<EditIcon />}
                  >
                    Editar
                  </Button>
                </div>
              </div>
            );
          })}
      </section>
      <>
        <Modal
          isOpen={isOpenToEdit}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Editá este sueño
                </ModalHeader>
                <ModalBody>
                  <Textarea
                    label="Texto"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs"
                  />

                  <CheckboxGroup
                    label="Soñe que..."
                    orientation="horizontal"
                    color="warning"
                    defaultValue={["buenos-aires", "san-francisco"]}
                  >
                    <Checkbox value="buenos-aires">caía</Checkbox>
                    <Checkbox value="sydney">hacia pís</Checkbox>
                    <Checkbox value="san-francisco">volaba</Checkbox>
                    <Checkbox value="london">alguien me perseguis</Checkbox>
                    <Checkbox value="tokyo">no podia correr</Checkbox>
                    <Checkbox value="tokyo">yo moría</Checkbox>
                    <Checkbox value="tokyo">alguien moria</Checkbox>
                    <Checkbox value="tokyo">veía un muerto</Checkbox>
                  </CheckboxGroup>

                  <Input
                    autoFocus
                    endContent={
                      <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Imagen de perfil"
                    placeholder="Katudev"
                    variant="bordered"
                    type="file"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Guardar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </section>
  );
};

export default MisSuenios;
