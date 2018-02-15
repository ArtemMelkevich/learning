import { StyleSheet } from 'react-native';
import { colors } from '../../Constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldPassword: {
    padding: 10,
    height: 40,
    backgroundColor: colors.colorField,
    borderRadius: 20,
  },
  fieldEmail: {
    padding: 10,
    height: 40,
    backgroundColor: colors.colorField,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonRegistretion: {
    alignItems: 'center',
    padding: 20,
  },
  buttonSignIn: {
    backgroundColor: colors.buttonNext,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFormFields: {
    alignItems: 'stretch',
    marginBottom: 30,
  },
  containerForm: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    alignItems: 'stretch',
    marginBottom: 10,
  },
  txt: {
    color: colors.txt,
  },
  txtRegister: {
    color: colors.txtRegister,
  },

});

export default styles;
