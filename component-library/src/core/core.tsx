import {componentsMap} from '../components/componentsMap';
import {render} from "preact";

export class Core {
    public create = (componentName: keyof typeof componentsMap, options: any, mountPoint: HTMLElement) => {
        const Component = componentsMap[componentName];

        render(<Component {...options} />, mountPoint)
    };
}
