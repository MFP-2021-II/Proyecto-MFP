import Button from "components/Buttons/Button";
import router from "next/router";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = window.localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <div className="App">
      <h1>Hola, estos son tus datos personales:</h1>
      <ul>
        <li>Nombre: {user?.firstName}</li>
        <li>Apellido: {user?.lastName}</li>
        <li>Email: {user?.email}</li>
      </ul>
      <div className="w-64">
        <Button
          onClick={() => {
            window.localStorage.removeItem("user");
            router.push("/login");
          }}
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}
