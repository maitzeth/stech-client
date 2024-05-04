import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputText } from '@/components';

export const ModemForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Campo requerido'),
    }),
    onSubmit: values => {
      // Aquí puedes manejar la lógica de envío del formulario
      console.log(values);
    },
  });

  const { handleChange, values, errors, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        value={values.name}
        id="name"
        label="Name"
        onChange={handleChange}
        error={errors.name}
      />
      <div>
        {/* <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nombre}
        />
        {formik.touched.nombre && formik.errors.nombre ? (
          <div>{formik.errors.nombre}</div>
        ) : null} */}
      </div>
    </form>
  );
};
