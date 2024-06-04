import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#fdfcfe",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    color: '#fdfcfe',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 7
  },
  buttonText: {
    
    color: '#fff',
    fontSize: 24,

  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {    
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listaEmptyText:{
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
});
