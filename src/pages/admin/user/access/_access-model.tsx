import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAccess() {
  const navigate = useNavigate();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  return {
    openModalDelete,
    setOpenModalDelete,
    navigate,
  };
}
