import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 5%;
  background-color: bisque;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 95%;
  margin-top: 15px;
  padding: 10px;
  background-color: rgba(17, 15, 50, 0.7512254901960784);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 28, 64, 0.751);
  }
`;

const TextContainer = styled.div`
  margin: 5%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  h1 {
    font-size: 30px;
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    width: 500px;
    font-size: 20px;
  }

  @media (max-width: 560px) {
    font-size: 20px;
    width: 300px;
    padding: 12px;
    margin-top: 5%;
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 12px;
    margin-top: 5%;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .required('El nombre es obligatorio'),
  address: Yup.string()
    .min(5, 'La dirección debe tener al menos 5 caracteres')
    .required('La dirección es obligatoria'),
  phone: Yup.string()
    .matches(
      /^[0-9]{10,15}$/,
      'El teléfono debe tener entre 10 y 15 dígitos y solo números'
    )
    .required('El teléfono es obligatorio'),
});

const Checkout = () => {
  const handleSubmit = (values, { resetForm }) => {
    Swal.fire({
      title: '¡Pedido enviado con éxito!',
      text: 'Gracias por tu compra. Pronto recibirás una confirmación.',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#4caf50',
    });
    console.log('Datos del pedido:', values);

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', address: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <TextContainer>
          <h1>Formulario de pedido</h1>
          <CheckoutContainer>
            <Title>Completa tus Datos para Finalizar</Title>

            <Form>
              <StyledField
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
              />
              <ErrorMessage name="name" component={ErrorText} />

              <StyledField type="text" name="address" placeholder="direccion" />
              <ErrorMessage name="address" component={ErrorText} />

              <StyledField type="tel" name="phone" placeholder="telefono" />
              <ErrorMessage name="phone" component={ErrorText} />

              <SubmitButton type="submit">Enviar Pedido</SubmitButton>
            </Form>
          </CheckoutContainer>
        </TextContainer>
      )}
    </Formik>
  );
};

export default Checkout;
