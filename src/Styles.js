import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'column'
	},

	containerRow: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},

	spacing: {
		flex: 0.1,
	},

	title: {
		fontWeight: 'bold',
		fontSize: 30,
	},

	titlePnl: {
		alignItems: 'center'
	},

	logo: {
	  	height: 300
	},

	avatar: {
	  	height: 50,
	  	width: 50,
	},

	textBox: {
	  fontFamily: 'Baskerville',
	  fontSize: 20,
	  alignItems: 'center',
	  justifyContent: 'center',
	},

	titleText:{
	  fontFamily: 'Baskerville',
	  fontSize: 20,
	  alignItems: 'center',
	  justifyContent: 'center',
	},

	button1: {
	  alignItems: 'center',
	  backgroundColor: '#1aa3ff',
	  width: 300,
	  height: 44,
	  padding: 10,
	  borderWidth: 0,
	  borderColor: 'transparent',
	  borderRadius: 25,
	  marginBottom: 10,
		shadowOffset:{  width: 10,  height: 10,  },
		shadowColor: 'black',
		shadowOpacity: 1.0,
	},

	button2: {
	  alignItems: 'center',
	  backgroundColor: 'white',
	  width: 150,
	  height: 44,
	  padding: 10,
	  borderWidth: 1,
	  borderColor: 'white',
	  borderRadius: 25,
	  marginBottom: 10,
	},

	buttonText:{
		fontFamily: 'Baskerville',
		fontSize: 15,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
  	textShadowOffset: {width: 1, height: 1},
  	textShadowRadius: 10,
	},

	submitText:{
		fontFamily: 'Baskerville',
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
  	textShadowOffset: {width: 1, height: 1},
  	textShadowRadius: 10,
	},

	input: {
		width: 300,
		fontFamily: 'Baskerville',
		fontSize: 20,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 5,
		marginVertical: 10,
	},

	form: {
	  flex: 1,
	  justifyContent: 'space-between',
  },

  spacer: {
  	padding: 20,
  },
});
