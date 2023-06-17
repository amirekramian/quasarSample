<template>
  <div  class="row stepcontainer">
    <div v-for="(item,index) in items" :key="index" class="itemcontainer">
        <div class="circle" :class="{Disabledcircle:activated<index+1, previuoscircle:activated>index+1}">
            <div class="innercircle" :class="{Disabledinnercircle:activated<index+1, previuosinnercircle:activated>index+1}">
            <b>{{ index+1 }}</b>
            </div>
        </div>
        <div class="row steptext" :class="{disabledsteptext:activated<index+1, previuossteptext:activated>index+1}">
            <b>{{item }}</b>
        </div>
    </div>



  </div>
</template>

<script>
import { defineComponent, inject, ref } from "vue";


export default defineComponent ({
name:"stepscomponent",
setup(){
    const activated = inject('activated')
const items = inject('items')
return{
    activated,
    items,
}
}
})
</script>

<style scoped>
.stepcontainer{
display: flex;
justify-content: center;
background: white;
height: 100px;
}
.circle{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #8D6748;
    color: white;
    width:45px ;
    height: 45px;
    border-radius: 100% ;
}
.innercircle{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgb(255, 255, 255);
    color: #8D6748;
    width:37px ;
    height: 37px;
    border-radius: 100% ;
}
.itemcontainer{
  color: #8D6748;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-right: 20px ;
}
.steptext{
    color: #8D6748;
}
.devider{
    margin-top: 37px;
    background: #8D6748;
    width: 35px;
    height: 2px;
}
.Disabledcircle{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #c5c5c5;
    color: white;
    width:35px ;
    height: 35px;
    border-radius: 100% ;
}
.Disabledinnercircle{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgb(255, 255, 255);
    color: #c2c2c2;
    width:30px ;
    height: 30px;
    border-radius: 100% ;
}
.disabledsteptext{
    color: #c7c7c7;
    font-size: 0.8rem;
}
.previuoscircle{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background: #8D6748;
    color: white;
    width:35px ;
    height: 35px;
    border-radius: 100% ;
}
.previuosinnercircle{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgb(255, 255, 255);
    color: #8D6748;
    width:30px ;
    height: 30px;
    border-radius: 100% ;
}
.previuossteptext{
    color: #8D6748;
    font-size: 0.8rem;
}
</style>
