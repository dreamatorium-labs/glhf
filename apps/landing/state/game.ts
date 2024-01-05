import { proxy } from 'valtio';

interface GameState {
	template: string;
	banner: string;
	gameName: string;
	domainName: string;
	initialSpeed: number;
}

export const gameState = proxy<GameState>({
	template: '',
	banner: '',
	gameName: '',
	domainName: '',
	initialSpeed: 30,
});

export const gameActions = {
	update: (value: Partial<GameState>) => {
		for (const key in value) {
			gameState[key as keyof GameState] = value[key as keyof GameState];
		}
	},
};
