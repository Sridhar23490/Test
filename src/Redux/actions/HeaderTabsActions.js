import { Tabs } from '../types/HeaderTabsTypes'
import { Imgs } from '../types/HeaderTabsTypes'
import {EntireProducts} from '../types/HeaderTabsTypes'

export const setTabs = (currenttab) => {
    return {
        type: Tabs.homeTabs,
        value: currenttab
    }
}

export const setImgs = (currImg,ID) => {
    return {
        type: Imgs.activeImgs,
        value: currImg,
        name: ID
    }
}

export const setProducts = () => {
    return{
        type: EntireProducts.products
    }
}
