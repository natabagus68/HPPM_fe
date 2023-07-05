import { useNavigate } from "react-router-dom";

export default function useMappingMenu() {
  const navigate = useNavigate();
  return {
    navigate,
  };
}
