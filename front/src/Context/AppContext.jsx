/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUser() {

    if (!token) {
      setLoading(false);
      return;
    }
    try {
    const res = await fetch("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data);
    } else {
      console.error("Error al obtener el usuario:", data);
    }  } catch (error) {
      console.error("Error en la comunicación con el servidor:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
}
