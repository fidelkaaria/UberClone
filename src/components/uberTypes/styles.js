import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },

  middleContainer: {
    flex: 0.5,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  time: {color: 'blue'},
  rightContainer: {
    width: 30,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  //   price: {

  //   },
});

export default styles;
