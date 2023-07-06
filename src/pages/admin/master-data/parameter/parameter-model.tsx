import { useNavigate } from "react-router-dom";

export const useParameter = () => {
  const navigate = useNavigate();
  const toForm = () => {
    navigate("/admin/master-data/parameter/form");
  };

  return {
    toForm,
  };
};
