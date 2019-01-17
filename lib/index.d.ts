import { Component, ReactNode } from 'react';
import { default as Store } from 's-is-for-store';
interface Props<S> {
    store: Store<S>;
    children: (state: S) => ReactNode;
}
export declare class StoreProvider<S> extends Component<Props<S>, S> {
    constructor(props: Props<S>);
    handleState: (state: S) => Promise<{}>;
    render(): ReactNode;
}
export {};
//# sourceMappingURL=index.d.ts.map