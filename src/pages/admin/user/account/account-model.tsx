import { useNavigate } from "react-router-dom";

export default function useAccount() {
  const navigate = useNavigate();
  return {
    navigate,
  };
}
