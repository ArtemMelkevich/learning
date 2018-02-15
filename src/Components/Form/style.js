import { StyleSheet } from 'react-native';
import { colors } from '../../constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldEmail: {
    padding: 10,
    height: 40,
    backgroundColor: colors.colorField,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonNext: {
    marginTop: 20,
    backgroundColor: colors.buttonNext,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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

});

export default styles;
