import { deleteProduct } from '../../services/deleteProduct';
import Swal from 'sweetalert2';

export default function Card(props: any) {
  const { id, linea, categoria, descripcion, precio, referencia, cantidad } =
    props;

  const handleEliminate = async () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteProduct(id);
          Swal.fire('Borrado!', 'Tu archivo ha sido borrado!!', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          });
        }
      }
    });
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body bg-dark">
        <h4 className="card-title fw-bolder" style={{ color: 'white' }}>
          {linea}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted fw-bolder">{categoria}</h6>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Descripcion:</b> {descripcion}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Precio:</b> {precio}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Referencia:</b> {referencia}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Cantidad:</b> {cantidad}
        </p>
        <button
          onClick={handleEliminate}
          type="button"
          className="btn btn-outline-danger"
        >
          Borrar Producto
        </button>
      </div>
    </div>
  );
}
