import { proxy } from 'valtio';

interface GameState {
	template: string;
	banner: string;
	gameName: string;
	domainName: string;
	initialSpeed: number;
	difficulty: string;
	fees: number;
	players: number;
	tokenAddress: string;
	rewards: Record<string, number>;
}

export const gameState = proxy<GameState>({
	template: '',
	banner: '',
	gameName: '',
	domainName: '',
	initialSpeed: 30,
	difficulty: '',
	fees: 5.0,
	players: 2,
	tokenAddress: '',
	rewards: {
		top1: 100,
	},
});

export const gameActions = {
	update: (value: Partial<GameState>) => {
		for (const key in value) {
			gameState[key as keyof GameState] = value[key as keyof GameState];
		}
	},
};
