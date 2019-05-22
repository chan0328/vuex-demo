<template>
    <div id="product-list-two">
        <h2>Pet List</h2>
        <ul>
            <li v-for="pet in pets">
                <span class="name">{{ pet.name }}</span>
                <span class="price">{{ pet.age }}岁</span>
            </li>
            <button @click="setName">设置名字</button>
            <button @click="setNameAsync">异步设置名字</button>
            <button @click="setPetAge">设置年龄+1</button>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            pets:this.$store.state.b.pets
        }
    },
    methods:{
        setName(){
            this.$store.commit('setPetName','狸花猫');//mutations
        },
        setNameAsync(){
            this.$store.dispatch('getPetName','折耳猫');//actions
        },
        setPetAge(){
            this.pets=this.$store.getters.setAge;
            this.$store.commit('setPetAge',this.pets);//要改变state才能在增加
        }
    },
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
