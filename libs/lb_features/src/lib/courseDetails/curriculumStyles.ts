import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  rightContainer: ViewStyle;
  centerContainer: ViewStyle;
  leftContainer: ViewStyle;
  container: ViewStyle;
  topView: ViewStyle;
  courseName: TextStyle;
  categoryContainer: ViewStyle;
  categoryName: TextStyle;
  topicContainer: ViewStyle;
  topicCard: ViewStyle;
  topicName: TextStyle;
  subtopicsContainer: ViewStyle;
  subtopicCard: ViewStyle;
  subtopicText: TextStyle;
  checkmarkIcon: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: '#131927',
    flex: 1,
  },
  topView: {
    backgroundColor: '#A259FF',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensure even spacing between elements
    height: 80,
    borderRadius: 10, // Add some rounding to the corners for better aesthetics
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',                                             
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  }, 
  courseName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // courseName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center',
  // },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: 10,
    // marginBottom: 5,
  },
  topicContainer: {
    marginBottom: 16,
  },
  topicCard: {
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'black',
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ensure topicCard takes up available space
  },
  topicName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  subtopicsContainer: {
    marginTop: 0,
    backgroundColor: 'white',
    paddingTop: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 10,
  },
  subtopicCard: {
    paddingVertical: 8,
    marginVertical: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#B19D9D',
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtopicText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'left',
    flexShrink: 1, // Allow text to shrink to fit within the container
    flexGrow: 1, // Allow text to expand to fill available space
  },
  checkmarkIcon: {
    color: 'green',
    fontSize: 24,
    marginRight: 10,
  },
});

export default styles;
