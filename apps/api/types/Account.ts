import type { IAccount } from 'utils/graphInterfaces';

export const Account = {
	id: (i: IAccount) => i?.id,
};

export default Account;
