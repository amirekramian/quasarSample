<template>
          <div class="column q-mt-sm q-gutter-md logincontentcontainer col-sm-0 col-md-3">

            <q-img class="LogoImage" src="~/src/assets/images.png"> </q-img>
            <br />
            <b>Please pay attention to the following points </b>
            <ul>
              <li>Enter a valid email</li>
              <li>Enter a valid email2</li>

              <li>Use a strong password</li>
              <li>Check the password and retype are same</li>
            </ul>
            <router-link to="/signin" > Are you have account? </router-link>
            <div class="bottom-aligned-text">
              powered by amirekramian
            </div>
          </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({
name:"formcontent",
setup(){

}
})
</script>

<style scoped>
.logincontentcontainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #ffffff;
  height: 450px;
  border-radius: 20px;
  margin-left: 10px;
}
.LogoImage {
  width: 150px;
}
.bottom-aligned-text {
  color: #b1b1b1;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute; /* Position the text absolutely within the container */
  bottom: 0; /* Align the text to the bottom */
  /* Additional styles for the bottom-aligned text */
}
</style>
