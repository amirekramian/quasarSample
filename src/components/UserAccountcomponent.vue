<template>
<div class="componentcontainer">
  <div class="profilepicture">
<q-img src="~/src/assets/avatarPlaceHolder.png"></q-img>  </div>
<div class="usercontent">
<div><b>amir ekramian</b></div>
<div class="userrole">administrator</div>
</div>
<div>
  <q-icon v-if="!drawervisibility" @click="toggledrawer" name="menu" size="large" class="usermenu">  </q-icon>
  <q-icon v-if="drawervisibility" @click="toggledrawer" name="cancel" size="large" class="usermenu">  </q-icon>

<div v-if="drawervisibility" class="usermenudrawer">
<div>
user account
</div>
<hr>
<div class="logoutsection">
  <q-icon name="logout" size="large" color="red"> </q-icon> logout
</div>
</div>
</div>
</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name:"UserAccountcomponent",
  setup(){
    const drawervisibility = ref(false)
    const toggledrawer = () => {
      drawervisibility.value = !drawervisibility.value

    }

      return{
        drawervisibility,
        toggledrawer
      }
  }
})
</script>

<style scoped>
.componentcontainer{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
}
.profilepicture{
  margin-top: 3px;
  flex-direction:column ;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
.usercontent{
  display: flex;
  flex-direction:column ;
}
.userrole{
  border-style: solid;
  border-width: 1px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #7c7c7c;
}
.usermenu{
  margin: 10px;
  color: #7c7c7c;
}
.usermenudrawer{
  position: absolute;
  width: 200px;
  background: white;
  border-radius: 5px;
  padding: 15px;
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
;
}
.logoutsection{
  color: red;
}
</style>
