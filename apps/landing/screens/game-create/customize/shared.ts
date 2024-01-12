import { StyleSheet } from 'react-native';
import { montserrat, montserratLight, montserratMedium } from 'utils/style';

export const sharedStyle = StyleSheet.create({
	fieldContainer: {
		gap: 15,
	},
	field: {
		fontFamily: montserratMedium.style.fontFamily,
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
		width: 150,
		fontSize: 13,
		fontWeight: '300',
	},
	subFieldInputContainer: {
		borderRadius: 100,
		backgroundColor: '#202015',
		borderColor: '#2a342a',
	},
	subFieldInput: {
		paddingVertical: 10,
		fontFamily: montserrat.style.fontFamily,
		color: '#ffffff',
	},
});
