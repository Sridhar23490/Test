import { Tabs } from '../types/HeaderTabsTypes'
import { Imgs } from '../types/HeaderTabsTypes'
import { EntireProducts } from '../types/HeaderTabsTypes'
import { Image } from '../../Images/image'

const initialTabState = {
    activeTab: 'Home'
}

const initialImgState = {
    activeImg: '',
    activeName: ''
}

const initialProductState = {
    activeProduct: Image
}
const initialHistory = {
    history: '/'
}



export const historyReducer = (state = initialHistory, action) => {
    switch (action.type) {
        case '/addtocart': return {
            // ...state,
            // activeTab: action.value
        }
        default: return state
    }
}

export const tabReducer = (state = initialTabState, action) => {
    switch (action.type) {
        case Tabs.homeTabs: return {
            ...state,
            activeTab: action.value
        }
        default: return state
    }
}


export const imgReducer = (state = initialImgState, action) => {
    switch (action.type) {
        case Imgs.activeImgs: return {
            ...state,
            activeImg: action.value,
            activeName: action.name
        }
        default: return state
    }
}

export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case EntireProducts.products: return {
            ...state,
            activeProduct: ''

        }
        default: return state
    }
}

