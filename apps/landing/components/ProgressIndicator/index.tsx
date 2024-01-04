import { type FC, type ReactNode, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { montserrat } from 'utils/style';

import Indicator from './Indicator';

interface Props {
	steps: number;
	currentStep?: number;
}

export const ProgressIndicator: FC<Props> = ({ steps, currentStep = 1 }) => {
	const [innerCurrentStep, setInnerCurrenStep] = useState(currentStep);
	const Indicators: ReactNode[] = [];

	for (let i = 0; i < steps; i++) {
		Indicators.push(<Indicator active={i + 1 === innerCurrentStep} />);
	}

	useEffect(() => {
		setInnerCurrenStep(currentStep);
	}, [currentStep]);

	return (
		<View style={styles.container}>
			<View style={styles.indicatorContainer}>{Indicators}</View>
			<Text style={styles.progress}>{`${innerCurrentStep}/${steps}`}</Text>
		</View>
	);
};

export default ProgressIndicator;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 20,
		alignItems: 'center',
	},
	indicatorContainer: {
		flexDirection: 'row',
		gap: 5,
	},
	progress: {
		fontFamily: montserrat.style.fontFamily,
		fontSize: 16,
		color: '#ffffff',
	},
});
