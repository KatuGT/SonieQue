import { filtros } from "@/utils/filtros";
import {
  CheckboxGroup,
  Checkbox,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState([""]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex gap-3 md:mb-5">
      <div className="hidden md:flex flex-col">
        <CheckboxGroup
          label="Soñé que..."
          color="warning"
          value={selected}
          onValueChange={setSelected}
        >
          {filtros.map((filter) => (
            <Checkbox key={filter.value} value={filter.value}>
              {filter.key}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <Button
          className="mt-3"
          color="primary"
          variant="bordered"
          onClick={() => setSelected([""])}
          isDisabled={selected.length < 2}
        >
          Resetear
        </Button>
      </div>

      <div className="md:hidden">
        <Button onPress={onOpen} variant="shadow" color="primary">
          Filtros
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
          <ModalContent>
            {(onClose) => (
              <ModalBody className="py-5">
                <CheckboxGroup
                  label="Soñé que..."
                  color="warning"
                  value={selected}
                  onValueChange={setSelected}
                >
                  {filtros.map((filter) => (
                    <Checkbox key={filter.value} value={filter.value}>
                      {filter.key}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
                <Button
                  className="mt-3"
                  color="primary"
                  variant="bordered"
                  onClick={() => setSelected([""])}
                  isDisabled={selected.length < 2}
                >
                  Resetear
                </Button>
              </ModalBody>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Filters;
