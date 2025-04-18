import { createContext, useContext, useState, ReactNode } from "react";

import data from '../../data.json'

interface ModalContextType {
  isModalOpen: boolean
  openModal: (index: number) => void
  closeModal: () => void
  isModalOpenLinks: boolean
  openModalLinks: () => void
  closeModalLinks: () => void
  imagesPreview: string[]
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenLinks, setIsModalOpenLinks] = useState(false);
  const [imagesPreview, setImagesPreview] = useState<string[]>([])

  const openModal = (index: number) => {
    setImagesPreview(data[index].images_preview)
    setIsModalOpen(true);
  }

  const openModalLinks = () => {
    setIsModalOpenLinks(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const closeModalLinks = () => setIsModalOpenLinks(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, isModalOpenLinks, openModalLinks, closeModalLinks, imagesPreview }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro de um ModalProvider");
  }
  return context;
};
