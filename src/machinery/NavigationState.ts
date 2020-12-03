import type { NanoAccount, NanoTransaction } from './models';
import type {WalletData} from "./wallet";

export type MenuSelector = 'wallet' | 'setup' | 'menu' | 'about' | 'unlock' | 'create';
export type AccountAction = 'send' | 'transactions' | 'receive';

export interface SelectedAccountState {
  selectedAccount: NanoAccount;
  view: AccountAction | undefined;
  selectedTransaction: NanoTransaction | undefined;
}

export interface NavigationState {
  menu: MenuSelector;
  account: SelectedAccountState | undefined;
  walletData: WalletData | undefined
}
