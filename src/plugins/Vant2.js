import {Button,Tabbar,Icon,TabbarItem,Search } from 'vant';

const plugins =[
    Button,Tabbar,Icon ,TabbarItem,Search
]

export default function getVant(Vue){
    plugins.forEach(item=>{
        return Vue.use(item)
    })
}
