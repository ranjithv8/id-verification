import { componentsMap } from '../components';

class Core {
    public create = (componentName, options)=> {
        const component = componentsMap[componentName];
        return new component({
            ...options
        });
    };
}

export default Core;
