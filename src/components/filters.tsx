import { filtros } from "@/utils/filtros";
import {
  CheckboxGroup,
  Checkbox,
  Button,
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState([""]);

  return (
    <div className="flex gap-3 mb-5">
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
        <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" className="capitalize">
              Filtros
            </Button>
          </DropdownTrigger>
          <div className="border border-gray-50 rounded-3xl p-5 bg-darkBlue">
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
        </Dropdown>
      </div>
    </div>
  );
};

export default Filters;
