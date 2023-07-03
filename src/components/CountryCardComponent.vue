<template>
<div class="container row">
<div v-for="item in countrylist" :key="item" class="countrycard col-md-2 col-sm-3 col-12">
  <q-img :src="item.image"></q-img>
<h4>{{item.name}}</h4>
<p>data for {{item.leaguename}}</p>
<div class="actions">
  <q-icon name="flag" size="large"></q-icon> Ended games
</div>
<div class="actions">
  <q-icon name="timer" size="large"></q-icon> Schaduled games
  </div>
  <div class="actions">
    Table of teams
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";
import { defineComponent, onMounted, ref , require } from "vue";

export default defineComponent({
  name:'CountryCardComponent',
  setup(){
    let info = null;
    const config = {
  headers:{
    'X-Auth-Token': "8a9aaede82374a46bdf5caa18943330f",
    'Access-Control-Allow-Origin': '*'
  }
};
    const countrylist = ref([
      {
        name:"england",
        image:require("/src/assets/countries/eng.ong.png"),
        leaguename:"Primier league",
        LeagueCode:"PL",
        competiotionCode:"2021"
      },
      {
        name:"spain",
        image:require("/src/assets/countries/spain.svg"),
        leaguename:"Liga BBVA",
        LeagueCode:"DED",
        competiotionCode:"2003"

      },
      {
        name:"netherland",
        image:require("/src/assets/countries/netherland.png"),
        leaguename:"The Eredivisie league",
        LeagueCode:"SD",
        competiotionCode:"2077"
      }
      ]);

    onMounted(()=>{
      axios
      .get('https://api.football-data.org/v4/competitions/PL',config)
      .then(response => (console.log(response)))
    })

    return{
      countrylist,
      info
    }

  }
})
</script>

<style scoped>
.countrycard{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
.actions{
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
}
.actions:hover{
  cursor: pointer;
  color: white;
  background: #8D6748;
  align-items: center;
  border-style: none;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
}
</style>
