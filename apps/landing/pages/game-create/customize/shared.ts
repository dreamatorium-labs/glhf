import { StyleSheet } from 'react-native';
import { montserrat, montserratLight } from 'utils/style';

export const sharedStyle = StyleSheet.create({
	fieldContainer: {
		gap: 10,
	},
	field: {
		fontFamily: montserrat.style.fontFamily,
		fontWeight: 'bold',
		color: '#ffffff',
		fontSize: 15,
	},
	subFieldContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subField: {
		fontFamily: montserratLight.style.fontFamily,
		color: '#ffffff',
		width: 200,
		fontSize: 13,
		fontWeight: '300',
	},
	subFieldInputContainer: {
		width: 300,
		borderRadius: 100,
	},
	subFieldInput: {
		paddingVertical: 10,
		fontFamily: montserrat.style.fontFamily,
		color: '#ffffff',
	},
});
