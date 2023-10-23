import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function useHomeRedirect(authenticated) {
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated, navigate]);
}
