import { StyleSheet } from 'react-native';

const Inboxstyles = StyleSheet.create({
    listContainer: {
        padding: 20,
        backgroundColor: '#87cefa',
        flexGrow: 1,
      },
      screenTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1d3557',
        textAlign: 'center',
      },
      threadItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f6f9fc',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        alignItems: 'center',
      },
      threadUser: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1d3557',
        marginBottom: 4,
      },
      threadMessage: {
        fontSize: 14,
        color: '#333',
      },
      threadTime: {
        fontSize: 12,
        color: '#999',
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      errorText: {
        color: '#d00000',
        fontSize: 16,
      },
    });

export default Inboxstyles;