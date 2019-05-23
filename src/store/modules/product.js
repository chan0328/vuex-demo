const products={
    state:{
        //类似data
        products:[
            {name: '鼠标', price: 20},
            {name: '键盘', price: 40},
            {name: '耳机', price: 60},
            {name: '显示屏', price: 80}
        ]
    },
    getters:{
        //类似computed
        saleProducts:(state)=>{
            let newProduct=state.products.map(key=>{
                return{
                    name:key.name,
                    price:key.price/2
                }
            })
            return newProduct;
        }
    },
    mutations:{
        //类似methods,不能异步,能改变state里面的值
        save(state,data){
            state.products[0].name=data;
        }
    },
    actions:{
        //类似mutations,能异步
        getProducts(context,params){
            setTimeout(()=>{
                context.commit('save',params);
            },1000)
        }
    }
}

export default {products}