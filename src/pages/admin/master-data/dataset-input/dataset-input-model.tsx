import { useNavigate } from "react-router-dom";

export const useDataSetInput = () => {
  const navigate = useNavigate();
  const toForm = () => {
    navigate("/admin/master-data/dataset-input/form");
  };

  return {
    toForm,
  };
};
