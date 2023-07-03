<template>
    <q-layout view="lHh Lpr lFf">
        <header>
            <div class="pagecontainer">

                <div v-if="sideBarVisibility" class="sidebar">
                  <component :is="SidebarComponent"></component>
                </div>
                <div class="rightside column">
                <div class="headernav">
                    <div @click="sidebarToggle" class="menuArea">
                        <q-icon v-if="!sideBarVisibility" name="menu" size="large" color="brown" ></q-icon>
                        <q-icon v-if="sideBarVisibility" name="cancel" size="large" color="brown" ></q-icon>
                    </div>

                    <div class="userdetail">
                        <component v-if="UserLogedIn" :is="UserAccountcomponent"></component>
                    </div>
                    <div v-if="!UserLogedIn">
                      <q-btn color="brown" to="/signup">signup</q-btn>
                    </div>
                    <div v-if="!UserLogedIn">
                      <q-btn outline color="brown" to="/signin">signin</q-btn>
                    </div>
                    <div class="logoarea">
                    <q-img class="logoimage" src="~/src/assets/images.png"></q-img>
                    <b>mocha coffee store</b>
                    </div>
                </div>

                <div class="content col">
                  <q-page-container>
                    <router-view />
                  </q-page-container>
                </div>

                </div>
            </div>
        </header>
    </q-layout>
  </template>

<script>
import { defineComponent,ref } from "vue";
import UserAccountcomponent from "src/components/UserAccountcomponent.vue";
import SidebarComponent from "src/components/SidebarComponent.vue"

export default defineComponent({
name:"UserAreaLayout",
components:{
  UserAccountcomponent,
  SidebarComponent
},
setup(){
    const UserAccountcomponent = 'UserAccountcomponent';
    const SidebarComponent = 'SidebarComponent';
    const UserLogedIn = ref(true);
    const sideBarVisibility = ref(false)
    const sidebarToggle = () => {
        sideBarVisibility.value = !sideBarVisibility.value
    }

    return{
      UserLogedIn,
      UserAccountcomponent,
      SidebarComponent,
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
    width: 100%;

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
        width: 300px;
        height: 95%;
        border-radius: 10px;
  }
  .logoimage{
    width: 40px;
    margin: 5px;

  }
  .logoarea{
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    padding: 20px;
  }
  .rightside{
    display: flex;
    flex-direction: columns;
    width: 100%;
    height: 200px;
  }
.content{
}
</style>
