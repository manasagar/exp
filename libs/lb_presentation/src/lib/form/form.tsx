import { View } from 'react-native';
import {
  Btn,
  CustomCheckbox,
  LinkButton,
  RadioButton,
} from '@dr/lb_presentation';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { TextBox } from '../../../../lb_presentation/src/lib/ui/textbox';
import { TextArea } from '../../../../lb_presentation/src/lib/ui/textarea';
import React from 'react';

interface FormData {
  firstName: string;
  lastName: string;
}

export const MyForm: React.FC = () => {
  const methods = useForm<FormData>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert(data);
  };

  return (
    <FormProvider {...methods}>
      <View>
        <View>
          <TextBox name="First Name" twClass="border-2 p-3 m-auto" />
          <TextBox name="Last Name" twClass=" border-2 p-3 m-auto" />

          <LinkButton
            size="medium"
            onPress={handleSubmit(onSubmit)}
            title="Submit"
          />
        </View>
      </View>
    </FormProvider>
  );
};
