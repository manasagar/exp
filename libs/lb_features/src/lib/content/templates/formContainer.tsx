import { HtmlRenderer } from "../../../../../lb_utils/src/index";
import { TextInput, View } from 'react-native';
import tw from 'twrnc';

/* Sample form data:libs\lb_data-api\src\lib\mocks\sampleFormData.tsx
 */

const FormContainer = ({ formData }) => {
  const renderField = (field) => {
    switch (field.type) {
      case 'checkbox':
        return (
          <View>
            <HtmlRenderer htmlContent={field.label} />
            {field.options.map((option, index) => (
              /*  <Button key={index} title={option.display} onPress={() => {}} /> */
              <HtmlRenderer htmlContent={option.display} />
            ))}
          </View>
        );
      case 'radio':
        return (
          <View>
            <HtmlRenderer htmlContent={field.label} />
            {field.options.map((option, index) => (
              /*  <Button key={index} title={option.display} onPress={() => {}} /> */
              <HtmlRenderer htmlContent={option.display} />
            ))}
          </View>
        );
      case 'textbox':
        return (
          <TextInput
            style={tw.style('border border-gray-500')}
            placeholder={field.placeholder}
          />
        );
      case 'textarea':
        return (
          <TextInput
            style={tw.style('border border-gray-500')}
            multiline
            numberOfLines={4}
            placeholder={field.placeholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View>
      <HtmlRenderer htmlContent={formData.details.title} />
      <HtmlRenderer htmlContent={formData.details.subheading} />

      <View style={tw.style('mt-10 bg-red-500')}>
        {formData.fields.map((field, index) => (
          <View  style={tw.style('mt-5')} key={index}>{renderField(field)}</View>
        ))}
      </View>
    </View>
  );
};

export default FormContainer;
