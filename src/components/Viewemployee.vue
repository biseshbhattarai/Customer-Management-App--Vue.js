<template>
  <div id="Viewemployee">
     <ul class="collection with-header">
       <li class="collection-header"><h4>{{name}}</h4></li>
       <li class="collection-item">Employee Id No :{{employee_id}}</li>
       <li class="collection-item">Department : {{dept}}</li>
       <li class="collection-item">Postion : {{position}}</li>
     </ul>
     <router-link  to="/" class="btn grey">Back</router-link>
     <button v-on:click="deleteEmployee" class="btn red">Delete</button>
      <div class="fixed-action-btn">
        <router-link v-bind:to="{name: 'Editemployee', params:{employee_id:employee_id}}" class="btn-floating btn-large red"><i class="fa fa-pencil"></i></router-link>
      </div>
  </div>
</template>

<script>
import db from './firebaseinit'
export default {
  name:'Viewemployee',
  data(){
      return {
        employee_id: null,
        name: null,
        position: null,
        dept: null
          
      }
  },
  beforeRouteEnter(to, from , next){
      db.collection('employess').where('employee_id',
      '==', to.params.employee_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.employee_id = doc.data().employee_id,
            vm.name = doc.data().name,
            vm.dept = doc.data().dept,
            vm.position = doc.data().position
          })
        })
      })
  },
  watch : {
    '$route' : 'fetchData'
  },
  methods : {
    fetchData: function(){
      db.collection('employess').where('employee_id', '==', this.$route.params.employee_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.employee_id = doc.data().employee_id
          this.name = doc.data().name,
          this.dept = doc.data().dept,
          this.position = doc.data().position
        })
      })
    },
    deleteEmployee(){
      if(confirm('Are you sure?')){
            db.collection('employess').where('employee_id', '==', this.$route.params.employee_id).get()
           .then(querySnapshot => {
           querySnapshot.forEach(doc => {
             doc.ref.delete()
             this.$router.push('/')
          })
      })
      }
    }
  }
}
</script>

