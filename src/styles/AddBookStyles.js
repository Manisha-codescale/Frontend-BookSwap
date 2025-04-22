import { StyleSheet } from 'react-native';

const AddBookStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
      },
      textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 15,
      },
      radioRow: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
      },
      selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
      },
      radioText: {
        fontSize: 16,
      },
      imagePicker: {
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
      },
      imagePickerText: {
        color: '#888',
      },
      imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 8,
      },
      label: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 8,
      },
      
});

export default AddBookStyles;
