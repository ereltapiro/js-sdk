import Ironvest from "./index";
import { createMockServer } from "./mockServer";


(async () =>  {
    const options = {baseURL: ''};
    console.log(options)
    document.ironvest = new Ironvest(options);
    createMockServer()
})();
