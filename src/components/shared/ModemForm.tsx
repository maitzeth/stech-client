import React from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import * as Yup from 'yup';
import {
  InputText,
  TextArea,
  Form,
  SelectOptions,
  InputDate,
  Button,
  InputLabel,
  ErrorLabel
} from '@/components';
import { statusOptions } from '@/utils/constants';
import { ModemRequest } from '@/types/modems';


interface Props {
  onSubmitForm: (values: ModemRequest) => void;
}


export const ModemForm = ({ onSubmitForm }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: 'test',
      description: 'test',
      status: 'test',
      validSince: new Date(),
      tags: ['Tag 2']
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Campo requerido'),
      description: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      status: Yup.string().required('Required'),
      validSince: Yup.string().required('Required'),
      tags: Yup.array().of(Yup.string().required('Required')).min(1, "Need at least a tag"),
    }),
    onSubmit: values => {
      const parsedValues = {
        ...values,
        validSince: values.validSince.toISOString(),
      };

      onSubmitForm(parsedValues as ModemRequest);
    },
  });

  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    handleBlur,
    isSubmitting,
    setFieldValue
  } = formik;

  return (
    <Form.Wrapper onSubmit={handleSubmit}>
      <Form.Fieldset isLoading={isSubmitting} className="space-y-4">
        <InputText
          value={values.name}
          id="name"
          name="name"
          label="Name"
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your name"
          onBlur={handleBlur}
        />
        <TextArea
          value={values.description}
          id="description"
          name="description"
          label="Description"
          onChange={handleChange}
          error={errors.description}
          placeholder="Enter your description"
          onBlur={handleBlur}
        />
        <SelectOptions
          id="status"
          name="status"
          label="Status"
          onChange={handleChange}
          error={errors.status}
          value={values.status}
          options={statusOptions}
        />
        <InputDate
          label="Valid Since"
          id="validSince"
          name="validSince"
          value={values.validSince}
          onSelect={(date) => {
            setFieldValue('validSince', date);
          }}
        />

        <FormikProvider value={formik}>
          <InputLabel>
            Tags
          </InputLabel>
          <FieldArray
            name="tags"
            render={(arrayHelpers) => (
              <div className="space-y-3">
                {values.tags && values.tags.length > 0 && (
                  <>
                    {values.tags.map((tag, index) => {
                      return (
                        <div key={index} className="flex gap-1">
                          <InputText
                            value={tag}
                            id={`tags.${index}`}
                            name={`tags.${index}`}
                            onChange={handleChange}
                            error={errors.tags ? errors.tags[index] : undefined}
                            placeholder="Enter your tag name"
                            onBlur={handleBlur}
                            wrapperClassname="flex-grow"
                          />
                          <div>
                            <Button
                              type="button"
                              variant="danger"
                              onClick={() => arrayHelpers.remove(index)}
                              className="py-[0.9rem]"  
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
                <Button
                  type="button"
                  onClick={() => arrayHelpers.push('')}
                  className="w-full"
                >
                  Add a tag
                </Button>
              </div>
            )}
          />
          {errors.tags && typeof errors.tags === 'string' && <ErrorLabel>{errors.tags}</ErrorLabel>}
        </FormikProvider>
        <Button type="submit">
          Submit
        </Button>
      </Form.Fieldset>
    </Form.Wrapper>
  );
};
