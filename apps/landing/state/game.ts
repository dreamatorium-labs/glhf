import { proxy } from 'valtio';

interface GameState {
	template: string;
	banner: string;
}

export const gameState = proxy<GameState>({
	template: '',
	banner: '',
});

export const gameActions = {
	update: (value: Partial<GameState>) => {
		for (const key in value) {
			gameState[key as keyof GameState] = value[key as keyof GameState] || '';
		}
	},
};
