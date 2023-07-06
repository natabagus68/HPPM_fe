import { useNavigate } from "react-router-dom/dist";

export default function useLandingPage() {
  const navigate = useNavigate();
  return {
    navigate,
  };
}
