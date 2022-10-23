import { Button, Select,Switch } from 'element-ui';
const plugins = [
    Button,Select ,Switch
]
export default function getElement(Vue){
    plugins.forEach((items)=>{
        return Vue.use(items)
    })
}