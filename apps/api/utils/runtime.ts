export interface UserProfile {
	id?: string;
}

export interface ApiContext {
	user: UserProfile;
}

export type Resolver<A, R = void> = (
	root: unknown,
	args: A,
	context: ApiContext,
) => Promise<R>;
