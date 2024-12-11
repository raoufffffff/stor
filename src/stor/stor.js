import { proxy } from "valtio";

let state = proxy({items: []})

export default state