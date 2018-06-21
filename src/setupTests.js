import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

global.waitForPromises = () => new Promise((resolve) => setImmediate(resolve));
global.ensureRender = (wrapper) => waitForPromises().then(() => wrapper.update());

configure({ adapter: new Adapter() });
