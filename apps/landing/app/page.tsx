export default function Page(): JSX.Element {
	return (
		<div style={styles.container}>
			<span>Comming soon!</span>
		</div>
	);
}

const styles = {
	container: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	} as never,
};
