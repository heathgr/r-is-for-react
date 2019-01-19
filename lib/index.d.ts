import { Component, ReactNode } from 'react';
import { default as Store } from 's-is-for-store';
export interface StoreProviderProps<T> {
    store: Store<T>;
    children: (state: T) => ReactNode;
}
export declare class StoreProvider<T> extends Component<StoreProviderProps<T>, T> {
    constructor(props: any);
    handleState: (state: any) => Promise<{}>;
    render(): ReactNode;
}
//# sourceMappingURL=index.d.ts.map