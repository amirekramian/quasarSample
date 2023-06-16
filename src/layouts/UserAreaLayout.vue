<template>
    <q-layout view="lHh Lpr lFf">
        <header>
            <div class="pagecontainer">

                <div v-if="sideBarVisibility" class="sidebar">
                sidebar
                </div>

                <div class="headernav ">

                    <div @click="sidebarToggle" class="menuArea">
                        <q-icon name="menu" size="large" ></q-icon>
                    </div>

                    <div class="userdetail">
                        amir ekramian
                    </div>
                </div>
            </div>
        </header>
      <q-page-container>
        <router-view />
      </q-page-container>
      <footer>
        footer
      </footer>
    </q-layout>
  </template>

<script>
import { defineComponent,ref } from "vue";

export default defineComponent({
name:"UserAreaLayout",
setup(){
    const sideBarVisibility = ref(false)
    const sidebarToggle = () =>{
        sideBarVisibility.value = !sideBarVisibility.value
    }

    return{
        sideBarVisibility,
        sidebarToggle
    }
}
});
</script>

<style scoped>
.headernav{
    display: flex;
    justify-content: left;
    text-align: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background: white;
    border-radius: 5px;
}
.sidebar{
    width: 400px;
    height: 100vh;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
}
.pagecontainer{
    display: flex;

}
.menuArea{
    justify-content: center;
    text-align: center;
    font-size: 1.5rem ;
    padding:10px ;
    }
    .userdetail{
        display: flex;
        justify-content: center;
        width: 200px;
        background: #9b70488a;
        height: 95%;
        border-radius: 10px;
    }
</style>