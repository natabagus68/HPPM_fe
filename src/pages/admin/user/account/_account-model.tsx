import { useParams, useNavigate } from "react-router-dom";

type TParams = {
  type: string;
};

export default function useAccount() {
  const navigate = useNavigate();
  const { type } = useParams<TParams>();
  return {
    type,
    navigate,
  };
}
