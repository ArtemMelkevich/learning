import { StyleSheet } from 'react-native';

import { colors } from '../../Constants';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.header,
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  container: {
    height: 20,
    backgroundColor: colors.headerContainer,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  arrow_button: {
    flexDirection: 'row',
  },
  text: {
    color: colors.txtHeader,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default styles;
