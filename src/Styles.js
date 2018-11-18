import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	containerVertical: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column'
	},
	containerHorizontal: {
		flex: .1,
		backgroundColor: '#fff',
		flexDirection: 'row'
	},
	containerBox:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'

	},

	spacing: {
		flex: 0.1,
	},


	fieldTitle: {
		fontSize: 20,
		fontWeight: 'bold'
	},

	inputText: {
		fontSize: 15,
	},

	field: {
		flex: .4
	},

	inField:{
		flex: 1
	},

	interest:{
		flex:1,
	},

	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		// justifyContent: 'space-evenly',
		justifyContent: 'center',
		flexDirection: 'column'
	},

	title: {
		fontWeight: 'bold',
		fontSize: 30,
	},


	CEtitle: {
		fontWeight: 'bold',
		fontSize: 28,
		marginBottom: 10,
	},

	logo: {
		height: 280
	},

	avatar: {
		height: 150,
		width: 150,
	},

	uploadAvatar: {
		height: 110,
		width: 110,
	},

	textBox: {
		fontFamily: 'Avenir',
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
	},

	titleText:{
		fontFamily: 'Avenir',
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button1: {
		alignItems: 'center',
		backgroundColor: '#00bfff',
		//backgroundColor: 'powderblue',
		width: 300,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 5,
		marginBottom: 20,
		// shadowOffset:{  width: 5,  height: 5,  },
		// shadowColor: 'black',
		// shadowOpacity: 1.0,
	},

	picker: {
		alignItems: 'center',
		backgroundColor: 'powderblue',
		width: 150,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 5,
		marginBottom: 10,
	},

	login:{
		fontFamily: 'Avenir',
		fontSize: 15,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		// textShadowColor: 'rgba(0, 0, 0, 0.75)',
		// textShadowOffset: {width: 1, height: 1},
		// textShadowRadius: 5,
	},

	buttonText:{
		fontFamily: 'Avenir',
		fontSize: 15,
		//fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		//color: 'white',
		// textShadowColor: 'rgba(0, 0, 0, 0.75)',
		// textShadowOffset: {width: 1, height: 1},
		// textShadowRadius: 5,
	},

	submitText:{
		fontFamily: 'Avenir',
		fontSize: 15,
		fontWeight: 'bold',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		//textShadowColor: 'rgba(0, 0, 0, 0.75)',
		//textShadowOffset: {width: 1, height: 1},
		//textShadowRadius: 5,
	},

	input: {
		width: 300,
		fontFamily: 'Avenir',
		fontSize: 18,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'grey',
		borderRadius: 5,
		marginVertical: 10,
	},

	description: {
		width: 300,
		fontFamily: 'Avenir',
		fontSize: 18,
		height: 120,
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

	inputMain: {
		   width: 300,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
	}
});
