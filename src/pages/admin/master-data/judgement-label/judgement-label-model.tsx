import { useNavigate } from "react-router-dom";

export const useJudgementLabel = () => {
  const navigate = useNavigate();
  const toForm = () => {
    navigate("/admin/master-data/judgement-label/form");
  };

  return {
    toForm,
  };
};
