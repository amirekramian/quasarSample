<template>
    <q-page>
      <div class="centerizecontainer">
        <div class="row maincontainer">
          <div class="column col-sm-10 col-md-5 centerize">
            <div class="column col-md-10 q-mt-sm q-gutter-md loginformcontainer">
              <component :is="stepscomponent" :items="items" :activated="activestep"></component>
              <div class="codecontainer">
            <q-input 
            v-for="(item , index) in code" 
            :key="index"
            input-class="codedigit"
            class="codedigit"
            maxlength="1" 
            v-model="code[index]"
            color="brown"
            @keydown="handleKeyDown(index,$event)"
            ref="codeInputs">
            </q-input>
              </div>

              <div v-if="second>0" class="brownpill">
                {{ second }} seconds
              </div>
              
              <div v-if="timerexpired = true" @click="resendcode" class="brownpill">
                Time's up. get the new code
              </div>

              <router-link to="signup">wrong email?</router-link>

              <div class="row mt-2">
                <div class="column col-sm-8 col-md-8">
                  <q-btn ref="submitkey" rounded color="brown" to="signup3">
                    next step
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
  import { defineComponent, ref , provide, onMounted, onUnmounted } from "vue";
  import formcontent from "../components/formcontent.vue";
  import stepscomponent from "../components/stepscomponent.vue";
  
  export default defineComponent({
    components: {
      formcontent,
      stepscomponent
      },
    name: "SignupPage2",
    setup() {
      const second = ref(120);
      let timer;
      const code =ref(["","","","",""])
      const formcontent = 'formcontent';
      const stepscomponent ='stepscomponent'
      const items = ref(['enter email','verfy email','set password'])
      const activestep = ref(2)
      const timerexpired = ref(false)
      const codeInputs = ref([])
      const submitkey = ref("")

      const resendcode = () =>{
        timerexpired.value = false
        second.value = 120
      }

      const starttimer =() =>{
        timer = setInterval(() => {
          second.value--
        }, 1000);
      };

      const stoptimer =()=>{
        clearInterval(timer)
        second.value =120
      };
      
      onMounted(()=>{
        codeInputs.value[0].focus()
        starttimer();
        timerexpired.value = false
      });

      onUnmounted(()=>{
        stoptimer();
        timerexpired.value = true
      });

      const handleInput = (index) =>{   
          codeInputs.value[index+1].focus()  
    }

      const handleKeyDown =(index,event)=>{
        if (event.key === 'Backspace' && index > 0 && index<=code.value.length) {
        event.preventDefault();
        code.value[index] = '';
        codeInputs.value[index-1].focus()
      }else if(event.key !='Alt'&&event.key !='Control' &&event.key !='Backspace' && event.key !='Shift'&& event.key !='Enter'&& event.key !='Tab'){

          code.value[index] = event.key;
          codeInputs.value[index+1].focus()
      }
      console.log(index)
    }
      provide('items', items);
      provide('activated',activestep)
  
  
      return {
        submitkey,
        codeInputs,
        second,
        timerexpired,
        resendcode,
        handleKeyDown,
        handleInput,
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
    text-align: center;
    width: 10%;
    font-weight: bold;
    font-size: 1.4rem;
    color: #9b7048;
  }
  .centerize{
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .brownpill{
    border-radius: 10px;
    background: white;
    color: #9b7048;
    font-weight: bold;
  }
  </style>
  
  