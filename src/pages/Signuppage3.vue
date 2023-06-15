<template>
    <q-page>
      <div class="centerizecontainer">
        <div class="row maincontainer">
          <div class="column col-sm-10 col-md-5">
            <div class="column col-md-10 q-mt-sm q-gutter-md loginformcontainer">
              <component :is="stepscomponent" :items="item" :activated="activestep"></component>
                <q-input
                outlined
                v-if="passwordvisibility"
                rounded
                label="password"
                v-model="password"
                @update:model-value="
                  passwordcapitalvalidator();
                  passwordlengthvalidator();
                  passwordnumbervalidator();
                  passwordspecialcharactervalidator();
                "
                @click="conditionstogglechange"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-if="conditionstoggle" v-slot:append>
                  <div :class="{ passedpill: lengthvalidation }" class="pill">
                    <q-icon v-if="lengthvalidation" name="check" />
                    8digit
                  </div>
                  <div :class="{ passedpill: capitalvalidation }" class="pill">
                    <q-icon v-if="capitalvalidation" name="check" />
                    A-Z
                  </div>
                  <div :class="{ passedpill: specialvalidation }" class="pill">
                    <q-icon v-if="specialvalidation" name="check" />
                    @!...
                  </div>
                  <div :class="{ passedpill: numbervalidation }" class="pill">
                    <q-icon v-if="numbervalidation" name="check" />
                    123...
                  </div>
                  <div @click="togglepasswordvisibility">
                    <q-icon name="visibility" />
                  </div>
                </template>
              </q-input>
  
            <q-input
                outlined
                v-else
                rounded
                label="password"
                type="password"
                v-model="password"
                @update:model-value="
                  passwordcapitalvalidator();
                  passwordlengthvalidator();
                  passwordnumbervalidator();
                  passwordspecialcharactervalidator();
                "
                @click="conditionstogglechange"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-if="conditionstoggle" v-slot:append>
                  <div :class="{ passedpill: lengthvalidation }" class="pill">
                    <q-icon v-if="lengthvalidation" name="check" />
                    8digit
                  </div>
                  <div :class="{ passedpill: capitalvalidation }" class="pill">
                    <q-icon v-if="capitalvalidation" name="check" />
                    A-Z
                  </div>
                  <div :class="{ passedpill: specialvalidation }" class="pill">
                    <q-icon v-if="specialvalidation" name="check" />
                    @!...
                  </div>
                  <div :class="{ passedpill: numbervalidation }" class="pill">
                    <q-icon v-if="numbervalidation" name="check" />
                    123...
                  </div>
                  <div @click="togglepasswordvisibility">
                    <q-icon name="visibility" />
                  </div>
                </template>
              </q-input>
  
              <q-input
                outlined
                rounded
                v-model="retype"
                type="password"
                label="re-type password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <div v-if="retype != password">
                    <q-icon name="cancel" color="red" />
                  </div>
                  <div v-if="retype == password && password != ''">
                    <q-icon name="check" color="green" />
                  </div>
                </template>
              </q-input>
              <div class="row mt-2">
                <div class="column col-sm-8 col-md-8">
                  <q-btn to="signup2" rounded color="brown" @click="submitlogin">
                    <q-icon name="check" /> sign up
                  </q-btn>
                </div>
  
                <div class="column m-1 col-sm-4 col-md-4">
                  <q-btn rounded outline color="brown" to="signup"> cancel </q-btn>
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
    name: "SignupPage3",
    setup() {
      const formcontent = 'formcontent';
      const stepscomponent ='stepscomponent'
      const email = ref("");
      const password = ref("");
      const lengthvalidation = ref(false);
      const specialvalidation = ref(false);
      const capitalvalidation = ref(false);
      const numbervalidation = ref(false);
      const conditionstoggle = ref(false);
      const passwordvisibility = ref(false);
      const retype = ref("");
      const items = ref(['enter email','verfy email','set password'])
      const activestep = ref(3)
      provide('items', items);
      provide('activated',activestep)
  
      const togglepasswordvisibility = () => {
        passwordvisibility.value = !passwordvisibility.value;
      };
      const passwordspecialcharactervalidator = () => {
        console.log("password raised");
        var specialcharacterformat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        var specialcharacterresult = specialcharacterformat.test(password.value);
        if (specialcharacterresult) {
          specialvalidation.value = true;
        } else {
          specialvalidation.value = false;
        }
      };
  
      const passwordnumbervalidator = () => {
        console.log("number raised");
        var numberformat = /[0-9]+/;
        var numberresult = numberformat.test(password.value);
        if (numberresult) {
          numbervalidation.value = true;
        } else {
          numbervalidation.value = false;
        }
      };
  
      const passwordcapitalvalidator = () => {
        console.log("capital raised");
        var capitalformat = /[A-Z]+/;
        var capitalresult = capitalformat.test(password.value);
        if (capitalresult) {
          capitalvalidation.value = true;
        } else {
          capitalvalidation.value = false;
        }
      };
  
      const passwordlengthvalidator = () => {
        console.log("length raised");
        const checkcase = password.value;
        if (checkcase.length >= 8) {
          lengthvalidation.value = true;
        } else {
          lengthvalidation.value = false;
        }
      };
  
      const submitlogin = () => {
        console.log("login submited");
      };
      const conditionstogglechange = () => {
        conditionstoggle.value = true;
      };
      const akbar = (ss) => {
        alert(ss);
      };
  
      return {
        stepscomponent,
        activestep,
        items,
        formcontent,
        passwordvisibility,
        email,
        password,
        lengthvalidation,
        numbervalidation,
        specialvalidation,
        capitalvalidation,
        passwordspecialcharactervalidator,
        passwordnumbervalidator,
        passwordcapitalvalidator,
        passwordlengthvalidator,
        submitlogin,
        conditionstoggle,
        conditionstogglechange,
        akbar,
        togglepasswordvisibility,
        retype,
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
  </style>
  
  