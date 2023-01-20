import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/newProduct');
  };

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
            onClick={handleClick}
          >
            Crear Producto
          </button>
        </div>
      </div>
    </nav>
  );
}
