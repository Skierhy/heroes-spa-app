export const FooterApp = () => {
	const styles = {
		footer: {
			backgroundColor: '#ffffff',
			position: 'absolute',
			bottom: '0',
			width: '100%',
			height: '5rem',
		},
	};
	return (
		<>
			<div style={styles.footer}>
				<h2 className='text-center'>HeroesApp</h2>
				<div className='text-center'>
					<small style={styles.small}>
						by: <b>Skierhy</b>
					</small>
				</div>
			</div>
		</>
	);
};
