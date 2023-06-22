import { componentsMap } from '../components';
import {render} from "preact";
import IdVerificationComponent from "../components/IdVerification/component/IdVerificationComponent";

class Core {
    public create = (componentName: keyof typeof componentsMap, options: any, mountPoint: HTMLElement)=> {
        const Component = componentsMap[componentName];

        render(<Component {...options} />, mountPoint)
    };
}

export default Core;
