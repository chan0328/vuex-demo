const pets={
    state:{
        //类似data
        pets:[
            {name: '啊猫', age: 2},
            {name: '啊狗', age: 3},
            {name: '鹦鹉', age: 4},
            {name: '金鱼', age: 5}
        ]
    },
    getters:{
        //类似computed
        setAge:(state)=>{
            let age=state.pets.map(key=>{
                return{
                    name:key.name,
                    age:key.age+1
                }
            })
            return age;
        }
    },
    mutations:{
        //类似methods,不能异步,能改变state里面的值
        setPetName(state,data){
            state.pets[0].name=data;
        },
        setPetAge(state,data){
            state.pets=data;
        }
    },
    actions:{
        //类似mutations,能异步
        getPetName(context,params){
            setTimeout(()=>{
                context.commit('setPetName',params);
            },1000)
        }
    }
}

export default {pets}