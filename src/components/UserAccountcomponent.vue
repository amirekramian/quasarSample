<template>
<div class="componentcontainer">
  <div class="profilepicture">
<q-img src="~/src/assets/avatarPlaceHolder.png"></q-img>  </div>
<div class="usercontent">
<div><b>amir ekramian</b></div>
<div class="userrole">administrator</div>
</div>
<div><q-icon name="menu" size="large" class="usermenu"></q-icon></div>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name:"UserAccountcomponent",
  setup(){

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
</style>
