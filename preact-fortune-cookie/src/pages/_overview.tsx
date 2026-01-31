import { useCollectedFortunes, useFortuneActions } from '../stores/fortuneStore';

export function Overview() {
	const collectedFortunes = useCollectedFortunes();
	const { removeFortune, clearAllFortunes } = useFortuneActions();

	const formatDate = (timestamp: number) => {
		return new Date(timestamp).toLocaleString();
	};

	return (
		<section>
			<h1>Overview of your fortunes</h1>
			
			{collectedFortunes.length === 0 ? (
				<p>You haven't collected any fortunes yet. Go open some cookies!</p>
			) : (
				<>
					<p>Total fortunes collected: {collectedFortunes.length}</p>
					<button onClick={clearAllFortunes} style={{ marginBottom: '20px' }}>
						Clear All
					</button>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
						{collectedFortunes.map((fortune) => (
							<div 
								key={fortune.id} 
								style={{ 
									border: '1px solid #ccc', 
									padding: '15px', 
									borderRadius: '8px',
									backgroundColor: '#f9f9f9'
								}}
							>
								<p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
									{fortune.text}
								</p>
								<small style={{ color: '#666' }}>
									Collected: {formatDate(fortune.collectedAt)}
								</small>
								<button 
									onClick={() => removeFortune(fortune.id)}
									style={{ marginLeft: '10px', fontSize: '12px' }}
								>
									Remove
								</button>
							</div>
						))}
					</div>
				</>
			)}
		</section>
	);
}
