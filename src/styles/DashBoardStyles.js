import { StyleSheet } from "react-native";

const DashBoardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 15,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3,
  },
  filterContainer: {
    marginVertical: 3,
  },
  filterButton: {
    backgroundColor: "#007bff",
    paddingVertical: 0, 
    paddingHorizontal: 0,
    borderRadius: 20,
    marginRight: 10,
    alignSelf: "flex-start",
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center", 
    height: 25,
  },
  filterText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlignVertical: "center", 
    includeFontPadding: false, 
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
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
  conditionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  conditionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});

export default DashBoardStyles;