import { render } from 'preact';

class UIElement {
    protected props: any;
    public _node;
    public _component;

    constructor(props) {
        this.props = props;
        this._node = null;
    }

    protected render() {
        // render() not implemented in the element
        throw new Error('Kyc Forms cannot be rendered');
    }

    /**
     * Mounts an element into the dom
     * @param domNode - Node (or selector) where we will mount the payment element
     * @returns this - the payment element instance we mounted
     */
    public mount(domNode: HTMLElement | string): this {
        const node = typeof domNode === 'string' ? document.querySelector(domNode) : domNode;

        if (!node) {
            throw new Error('Component could not mount. Root node was not found.');
        }

        if (this._node) {
            throw new Error('Component is already mounted.');
        }

        this._node = node;
        this._component = this.render();

        render(this._component, node);

        return this;
    }
}

export default UIElement;
