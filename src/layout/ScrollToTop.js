import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente no renderiza nada visible.
// Su único trabajo es "escuchar" cuando cambia la URL (pathname)
// y, cada vez que eso pasa, mover el scroll de la ventana hasta arriba.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
