<template>
    <div class="blogscontainer">
        <component v-for="item in data" :key="item" :is="Blogrow"></component>

    </div>
</template>

<script>
import { defineComponent,ref } from 'vue';
import Blogrow from 'src/components/Blogrow.vue'

export default defineComponent ({
name:"Bloglist",
components:{
    Blogrow
},
setup(){
    const Blogrow = 'Blogrow';
    const data =ref(["","","",""])
    return{
        Blogrow,
        data
    }
}
});
</script>

<style scoped>
.blogscontainer{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}
</style>