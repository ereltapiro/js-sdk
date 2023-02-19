import { async } from "regenerator-runtime"

export default class Ironvest {
    constructor(options) {
        options = options || {}
        this.param1 = options.param1
        this.baseURL = options.baseURL
    }


    apiFunc = async () => {
        return await fetch(`${this.baseURL}/api/v1/movies?name=matrix`)
    }


    func = async () => {
        return "hello world"
    }
}

console.log(process.env.NODE_ENV)

const isDev = () => {
    return process.env.NODE_ENV === "development";
  }
  if (isDev()) {

    require("./dev_run");
  }
  