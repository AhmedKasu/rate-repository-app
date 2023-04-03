import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import useReviews from '../hooks/useReviews';
import useAuthenticatedUser from '../hooks/useAuthUser';

import ErrorMessage from './forms/ErrorMessage';
import FormikForm from './forms/FormikForm';
import FormikTextInput from './forms/FormikTextInput';
import SubmitButton from './forms/SubmitButton';

import HideKeyBoard from './forms/HideKeyboard';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const reviewSchema = yup.object().shape({
  repositoryName: yup.string().required().label('Repository name'),
  ownerName: yup.string().required().label('Repository owner name'),
  rating: yup.number().required().min(0).max(100).label('Rating'),
  text: yup.string().label('Review'),
});

const CreateReview = () => {
  const {
    createReview: [create, { error }],
  } = useReviews();
  const { user } = useAuthenticatedUser();

  const handleSubmit = async (values) => {
    try {
      await create(values);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HideKeyBoard style={styles.container}>
      <ErrorMessage error={error?.message} visible={error} />
      <FormikForm
        initialValues={{
          ownerName: '',
          repositoryName: '',
          rating: undefined,
          text: '',
        }}
        validationSchema={reviewSchema}
        onSubmit={handleSubmit}>
        <FormikTextInput name='ownerName' placeholder='Repository owner name' />
        <FormikTextInput name='repositoryName' placeholder='Repository name' />
        <FormikTextInput
          keyboardType='number-pad'
          type='number'
          name='rating'
          placeholder='Rating between 0 and 100'
        />
        <FormikTextInput
          multiline
          name='text'
          textAlignVertical='top'
          numberOfLines={2}
          placeholder='Review'
        />
        <SubmitButton title='Create a review' />
      </FormikForm>
    </HideKeyBoard>
  );
};

export default CreateReview;
