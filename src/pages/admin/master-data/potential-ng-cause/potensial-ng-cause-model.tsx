import { useNavigate } from "react-router-dom";

export const usePotensialNGCause = () => {
  const navigate = useNavigate();
  const toForm = () => {
    navigate("/admin/master-data/potential-ng-cause/form");
  };

  return {
    toForm,
  };
};
