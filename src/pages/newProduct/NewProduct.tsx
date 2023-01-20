import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { postProduct } from '../../services/postProducts';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import './NewProduct.css';
import { useEffect } from 'react';

export default function NewProduct() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const linea: string[] = [
    'chevrolet',
    'toyota',
    'suzuki',
    'mazda',
    'daihatsu',
    'nissan',
    'land rover',
    'mitsubishi',
    'hyundai-kia',
    'renault',
    'chinos',
    'daewoo',
    'varios',
  ];

  const categoria: string[] = [
    'motor',
    'suspension',
    'electricos',
    'accesorios',
    'caja',
    'direccion',
  ];

  const handleClickBack = () => {
    navigate('/');
  };

  const handleSubmit = async (values: object) => {
    try {
      await postProduct(values);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The product has been created',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo crear el producto',
      });
    }
  };

  useEffect(() => {
    if (!cookies.get('user')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark">
          Volver
        </button>
      </div>
      <Formik
        initialValues={{
          linea: '',
          categoria: '',
          descripcion: '',
          precio: 0,
          referencia: '',
          cantidad: 0,
        }}
        onSubmit={handleSubmit}
      >
        <Form className="d-flex justify-content-center p-5 w-75 m-5 h-100">
          <div className="container_form bg-dark">
            <label className="form-label mt-3">Linea:</label>
            <Field
              component="select"
              id="linea"
              name="linea"
              className="form-select mt-3"
            >
              <option hidden>Respuesta...</option>
              {linea.map((el: string) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </Field>
            <label className="form-label mt-3">Categoria:</label>
            <Field
              component="select"
              id="categoria"
              name="categoria"
              className="form-select mt-3"
            >
              <option hidden>Respuesta...</option>
              {categoria.map((el: string) => (
                <option value={el} key={el}>
                  {el}
                </option>
              ))}
            </Field>
            <label className="form-label mt-3">Descripcion:</label>
            <Field
              type="text"
              name="descripcion"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <label className="form-label mt-3">Precio:</label>
            <Field
              type="number"
              name="precio"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <label className="form-label mt-3">Referencia:</label>
            <Field
              type="text"
              name="referencia"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <label className="form-label mt-3">Cantidad:</label>
            <Field
              type="number"
              name="cantidad"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-success mt-3 mb-3">
              Crear encuesta
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
