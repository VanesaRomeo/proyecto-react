import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Estilos usando styled-components
const FormContainer = styled.div`
  margin-top: 10%;
  max-width: 400px;

  padding: 20px;
  background-color: bisque;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;

    @media (max-width: 768px) {
      width: 400px;
      font-size: 20px;
    }
    @media (max-width: 480px) {
      text-align: center;
      width: 300px;
      padding: 12px;
      margin-top: 5%;
    }
  }
`;

const InputStyled = styled(Field)`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 95%;
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

  p,
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
  p {
    font-size: 25px;
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

const Email = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

// Esquema de validación con Yup
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .required('Nombre y apellido requerido'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Solo se permiten números')
    .min(10, 'Debe tener al menos 10 dígitos')
    .required('Número de teléfono requerido'),
  email: Yup.string()
    .matches(Email, 'Email no valido')
    .required('Correo electrónico requerido'),

  comment: Yup.string()
    .trim()
    .max(100, 'El comentario no puede exceder 100 caracteres')
    .required('Comentario requerido'),
});

const Formulario = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <Formik
      initialValues={{
        fullName: '',
        phoneNumber: '',
        email: '',
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Formulario enviado:', values);
        resetForm();
      }}
    >
      {() => (
        <TextContainer>
          <h1>Contacto</h1>
          <p>
            Estamos aquí para hacer que tu experiencia sea excelente. Completa
            el formulario y haremos todo lo posible para ayudarte y resolver tus
            dudas.
          </p>

          <FormContainer>
            <h2>Formulario de Contacto</h2>
            <Form>
              <InputStyled
                type="text"
                name="fullName"
                placeholder="Nombre y Apellido"
              />
              <ErrorMessage name="fullName" component={ErrorMessageStyled} />

              <InputStyled
                type="text"
                name="phoneNumber"
                placeholder="Número de Teléfono"
              />
              <ErrorMessage name="phoneNumber" component={ErrorMessageStyled} />

              <InputStyled
                type="email"
                name="email"
                placeholder="Correo Electrónico"
              />
              <ErrorMessage name="email" component={ErrorMessageStyled} />

              <InputStyled
                as="textarea"
                name="comment"
                placeholder="Comentario"
                rows="4"
              />
              <ErrorMessage name="comment" component={ErrorMessageStyled} />

              <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
          </FormContainer>
        </TextContainer>
      )}
    </Formik>
  );
};

export default Formulario;
