import { useEffect, useState } from "react";

/**
 * Le site utilise massivement window/localStorage pendant le rendu.
 * On ne rend donc les pages qu'après l'hydratation côté navigateur.
 */
export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#0a0a0c]" />;
  }

  return children;
}
