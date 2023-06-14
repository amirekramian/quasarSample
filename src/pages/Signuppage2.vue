<template>
    <q-page>
      <div class="centerizecontainer">
        <div class="row maincontainer">
          <div class="column col-sm-10 col-md-5">
            <div class="column col-md-10 q-mt-sm q-gutter-md loginformcontainer">
              <component :is="stepscomponent" :items="items" :activated="activestep"></component>
              <div class="codecontainer">
            
            <q-input class="codedigit" maxlength="1" outlined rounded v-model="code[0]">
            </q-input>

            <q-input class="codedigit" maxlength="1" outlined rounded v-model="code[1]">
            </q-input>

            <q-input class="codedigit" maxlength="1" outlined rounded v-model="code[2]">
            </q-input>

            <q-input class="codedigit" maxlength="1" outlined rounded v-model="code[3]">
            </q-input>

            <q-input class="codedigit" maxlength="1" outlined rounded v-model="code[4]">
            </q-input>
              </div>

              <div class="row mt-2">
                <div class="column col-sm-8 col-md-8">
                  <q-btn rounded color="brown">
                    <q-icon name="login" /> next step
                  </q-btn>
                </div>
  
                <div class="column m-1 col-sm-4 col-md-4">
                  <q-btn rounded outline color="brown"> cancel </q-btn>
                </div>
              </div>
            </div>
          </div>
  
          <div class="column col-sm-8 col-md-3">
                <component :is="formcontent"></component>
          </div>
  
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent, ref , provide } from "vue";
  import formcontent from "../components/formcontent.vue";
  import stepscomponent from "../components/stepscomponent.vue";
  
  export default defineComponent({
    components: {
      formcontent,
      stepscomponent
      },
    name: "SignupPage2",
    setup() {
        const code =ref(["","","","",""])
      const formcontent = 'formcontent';
      const stepscomponent ='stepscomponent'
      const items = ref(['enter email','verfy email','set password'])
      const activestep = ref(2)
      provide('items', items);
      provide('activated',activestep)
  
  
      return {
        code,
        stepscomponent,
        activestep,
        items,
        formcontent,
      };
    },
  });
  </script>
  <style scoped>
  .pill {
    background: transparent;
    color: rgb(138, 138, 138);
    padding: 0 3px;
    border-style: solid;
    border-color: rgb(155, 155, 155);
    border-width: 1px;
    font-size: 0.7rem;
    border-radius: 20px;
    font-weight: bold;
  }
  .passedpill {
    background: forestgreen;
    color: rgb(255, 255, 255);
    padding: 0 5px;
    font-size: 0.7rem;
    border-radius: 20px;
    border-style: none;
    font-weight: bold;
  }
  .failedpill {
    background: rgb(173, 11, 11);
    color: rgb(255, 255, 255);
    padding: 0 5px;
    font-size: 0.7rem;
    border-radius: 20px;
    border-style: none;
    font-weight: bold;
  }
  .logincontentcontainer {
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
  .loginformcontainer {
    border-radius: 20px;
    margin-left: 20px;
    margin-right: -30px;
    background: white;
    padding: 20px 10px 20px 0;
    box-shadow: #b1b1b1;
    box-shadow: 4px 6px 23px -8px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .maincontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
  .LogoImage {
    width: 150px;
  }
  .centerizecontainer{
      flex-direction: column;
      justify-content: center;
      display: flex;
      height: 100vh;
  
  }
  .codecontainer{
    display: flex;
    justify-content: center;
  }
  .codedigit{
    margin: 15px;
    width: 10%;
    text-align: center;
    font-size: 1.2rem;
  }
  </style>
  
  