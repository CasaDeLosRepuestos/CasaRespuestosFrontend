import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function NavBar() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate('/newProduct');
  };

  const handleClickSession = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('user', { path: '/' });
    navigate('/');
  };

  useEffect(() => {
    if (!cookies.get('user')) {
      navigate('/');
    }
  }, []);

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 style={{ color: 'white', fontWeight: 'bolder' }}>
          Casa de los respuestos
        </h1>
        <h3 style={{ color: 'white', fontWeight: 'bolder' }}>inventario</h3>
        <div className="d-flex">
          <button
            className="btn btn-outline-warning m-2 p-2"
            type="button"
            disabled={true}
          >
            Generar excel
          </button>
          <button
            className="btn btn-outline-success m-2 p-2"
            type="button"
            onClick={handleClickCreate}
          >
            Crear Producto
          </button>
          <button
            className="btn btn-outline-danger m-2 p-2"
            type="button"
            onClick={handleClickSession}
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>
  );
}
