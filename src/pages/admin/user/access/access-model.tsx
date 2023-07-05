import { useNavigate } from "react-router-dom"

export default function useAccess(){
  const navigate = useNavigate();
  return{
    navigate
  }
}