import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: [],
      sale: false,
      products: [
        {
          thingId: 1,
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: true,
          count: 0,
          article: 'shoe',
          img: 'shoe1.png'
        },
        {
          thingId: 2,
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          count: 0,
          article: 'jacket',
          img: 'jacket1.png'
        },
        {
          thingId: 3,
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          count: 0,
          article: 'jacket',
          img: 'jacket2.png'
        },
        {
          thingId: 4,
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          count: 0,
          article: 'hats',
          img: 'hat1.png'
        },
        {
          thingId: 5,
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          count: 0,
          article: 'sweater',
          img: 'sweater1.png'
        },
        {
          thingId: 6,
          name: 'Long Linen-blend Shirt',
          price: 18.9,
          category: 'men',
          sale: false,
          count: 0,
          article: 'shirt',
          img: 'shirt1.png'
        },
        {
          thingId: 7,
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          count: 0,
          article: 'sweater',
          img: 'sweater2.png'
        },
        {
          thingId: 8,
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: false,
          count: 0,
          article: 'shirt',
          img: 'shirt2.png'
        },
        {
          thingId: 9,
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: true,
          count: 0,
          article: 'jacket',
          img: 'jacket3.png'
        },
        {
          thingId: 10,
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          count: 0,
          article: 'jacket',
          img: 'jacket4.png'
        },
        {
          thingId: 11,
          name: 'Spotted Patterned Sweater',
          price: 80.99,
          category: 'women',
          sale: false,
          count: 0,
          article: 'jacket',
          img: 'sweater4.png'
        },
        {
          thingId: 12,
          name: 'Double Knit Sweater',
          price: 59.99,
          category: 'men',
          sale: true,
          count: 0,
          article: 'jacket',
          img: 'sweater5.png'
        }
      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale
      },
      addItem (state, payload) {
        console.log("已触发到index.js")
        state.cartTotal += 1
        payload.count += 1;
        // 商品去重
        if (!(state.cart.some(e => e.thingId === payload.thingId))) {
          state.cart.push(payload)
        }
      },
      removeCartItem (state, payload) {
        state.cartTotal -= payload.qty
        const cartItemPostion = state.cart.indexOf(payload)
        state.cart.splice(cartItemPostion, 1)
      },
      clearCartCount (state) {
        state.cartTotal = 0
      },
      clearCartContents (state) {
        state.cart = []
      }
    }
  })
}

export default createStore

// helper
const filter = (array, key, value) => array.filter(item => item[key] === value)
