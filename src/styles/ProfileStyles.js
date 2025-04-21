import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
      },
      label: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
      },
      value: {
        fontSize: 16,
        color: "#555",
        marginBottom: 10,
      },
      button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15,
      },
      secondaryButton: {
        backgroundColor: "#28a745",
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
});

export default ProfileStyles;