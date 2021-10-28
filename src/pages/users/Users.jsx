import PrivateComponent from "components/PrivateComponent";
import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { obtenerUsuarios, editarUsuario } from "utils/api";

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchUsuarios = async () => {
      obtenerUsuarios(
        (respuesta) => {
          console.log("Usuarios", respuesta.data);
          setUsuarios(respuesta.data);
        },
        (err) => {
          console.log(err);
        }
      );
    };
    fetchUsuarios();
  }, []);

  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div>Admin Users</div>
      <PrivateComponent roleList={["admin"]}>
        <button className="bg-blue-400">Hola RBAC</button>
      </PrivateComponent>
      <table>
        <tbody>
          {usuarios.map((user) => {
            return (
              <tr key={nanoid()}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <RolesUsuario user={user} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const RolesUsuario = ({ user }) => {
  const [rol, setRol] = useState(user.rol);
  useEffect(() => {
    const editUsuario = async () => {
      await editarUsuario(
        user._id,
        { rol },
        (res) => {
          console.log(res);
        },
        (err) => {
          console.err(err);
        }
      );
    };
    if (user.rol !== rol) {
      editUsuario();
    }
  }, [rol, user]);
  return (
    <select value={rol} onChange={(e) => setRol(e.target.value)}>
      <option value="admin">Admin</option>
      <option value="vendedor">Vendedor</option>
      <option value="inactivo">Inactivo</option>
    </select>
  );
};

export default Users;
