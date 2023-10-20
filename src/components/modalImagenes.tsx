import { useEffect, useRef, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ModalImagenesProps {
  isOpen: any;
  onClose: any;
  imagenes: {
    id: number;
    image: string;
  }[];
  imagenClickeada: number;
}

const ModalImagenes = ({
  isOpen,
  onClose,
  imagenes,
  imagenClickeada,
}: ModalImagenesProps) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(imagenClickeada);
  }, [imagenClickeada]);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === imagenes.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="relative">
              <div className="w-full h-[400px] relative">
                <ul ref={listRef} className="w-full h-full overflow-hidden ">
                  {imagenes.map((image) => (
                    <li key={image.id} className="relative w-full h-full">
                      <Image
                        src={image.image}
                        alt={`ilustración número ${image.id}`}
                        fill={true}
                        objectFit="contain"
                      />
                    </li>
                  ))}
                </ul>
                <Button
                  isIconOnly
                  variant="flat"
                  className="absolute top-[50%] z-10 cursor-pointer"
                  onClick={() => scrollToImage("prev")}
                >
                  <KeyboardArrowLeftIcon />
                </Button>
                <Button
                  isIconOnly
                  variant="flat"
                  className="absolute top-[50%] right-0 z-10 cursor-pointer"
                  onClick={() => scrollToImage("next")}
                >
                  <KeyboardArrowRightIcon />
                </Button>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalImagenes;
