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
import { ModemRequest, ModemResponse } from '@/types/modems';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';


interface Props {
  onSubmitForm: (values: ModemRequest) => Promise<ModemResponse | Error | undefined>;
  errorMessage?: string;
}


export const ModemForm = ({ onSubmitForm }: Props) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      status: '',
      validSince: new Date(),
      tags: []
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must have at least 3 characters')
        .max(50, 'Must be 50 characters of less')
        .required('Campo requerido'),
      description: Yup.string()
        .min(10, 'Must have at least 10 characters')
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      status: Yup.string().required('Required'),
      validSince: Yup.string().required('Required'),
      tags: Yup.array().of(Yup.string().required('Required')).min(1, "Need at least a tag"),
    }),
    onSubmit: async (values) => {
      const parsedValues = {
        ...values,
        validSince: values.validSince.toISOString(),
      };

      const result = await onSubmitForm(parsedValues as ModemRequest);

      if (result) {
        if (result instanceof Error) {
          toast.error(result.message);
          return;
        }

        navigate(`${ROUTES.modems}/${result.id}`);
      } 

      toast.error('Something weird happened, please try again later.');
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
      <Form.Fieldset isLoading={isSubmitting} className="space-y-8">
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
          <div>
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
                    variant="success"
                  >
                    Add a tag
                  </Button>
                </div>
              )}
            />
            {errors.tags && typeof errors.tags === 'string' && <ErrorLabel>{errors.tags}</ErrorLabel>}
          </div>
        </FormikProvider>
        <Button type="submit">
          Submit
        </Button>
      </Form.Fieldset>
    </Form.Wrapper>
  );
};
