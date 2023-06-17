<template>
  <div class="row blogrowcontainer">
        <div class="column blogrowimage col-md-3 col-sm-3 col-3">
            <q-img class="image img-fluid" src="~/src/assets/images.png">

            </q-img>
        </div>
        <div class="column blogrowcontent col-md-3 col-sm-3 col-3">
            <div>
                this is title
            </div>
            <div>
                this is description
            </div>
            <div>
                this is author and release date
            </div>
        </div>
        <div class="column blogrowstatistics col-md-3 col-sm-3 col-3">
            <div>
                <q-icon name="email" /> this is statistics
            </div>
            <div>
                <q-icon name="email" /> this is statistics2
            </div>
        </div>
        <div class="column blogrowactions col-md-3 col-sm-3 col-3">
            <div>
                <q-icon name="email" size="large"/>
            </div>
            <div>
                <q-icon name="email" size="large" />
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.blogrowcontainer{
    margin: 10px;
    padding: 10px;
    display: flex;
    background: white;
    text-align: center;
    align-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100hv;
    height: 200px;
}
.blogrowimage{
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    /* background: #ef9696; */
}
.blogrowcontent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    padding: 10px;
    height: 100%;
    /* background: #96b7ef; */
}
.blogrowstatistics{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;
    height: 100%;
    /* background: #96ef96; */
}
.blogrowactions{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;
    height: 100%;
    /* background: #e8ef96; */
}
.image{
    max-width: 170px;
}
</style>
