import {StyleSheet} from 'react-native';

const AddedBooksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: '#333',
    textAlign: 'center',
  },
  // header: {
  //   fontSize: 22,
  //   fontWeight: '700',
  //   paddingHorizontal: 16,
  //   marginBottom: 10,
  //   color: '#1d3557',
  // },
  // scrollContent: {
  //   paddingHorizontal: 16,
  //   paddingBottom: 100,
  // },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    padding: 10,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 1,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  textGap: {
    flexDirection: 'row',
    width: ' 100%',
    fontSize: 13,
    color: '#555',
    marginTop: 2,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  // bookImage: {
  //   width: 60,
  //   height: 90,
  //   borderRadius: 6,
  //   resizeMode: 'cover',
  // },
  bookInfo: {
    flex: 1,
    marginLeft: 12,
  },
  // isbn: {
  //   fontSize: 12,
  //   color: '#777',
  // },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9534f",
    marginTop: 5,
  },
  details: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  viewRow: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  image: {
    width: '35%',
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  
  conditionContainer: {
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  
  conditionText: {
    fontSize: 12,
    fontWeight: '600',
  },
  iconLeft: {
    alignSelf: 'flex-end',
  },
  
  
  // condition: {
  //   //fontSize: 13,
  //   color: '#dc143c',
  //   textAlign: 'center',
  //   //marginTop: 2,
  // },
  // editIcon: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  //   zIndex: 1,
  //   padding: 5,
  // },
  // fab: {
  //   position: 'absolute',
  //   bottom: 20,
  //   right: 20,
  //   backgroundColor: '#1d3557',
  //   width: 56,
  //   height: 56,
  //   borderRadius: 28,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   elevation: 5,
  // },
  // fabText: {
  //   color: '#fff',
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   marginBottom: 2,
  // },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default AddedBooksStyles;
