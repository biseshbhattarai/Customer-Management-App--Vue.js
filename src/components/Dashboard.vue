<template>
  <div id="dashboard">
      <ul class="collection with-header">
        <li class="collection-header"><h4>Employees</h4></li>
        <li v-for="d in employees" v-bind:key="d.id" class="collection-item"><div class="chip">{{d.dept}}</div>{{d.employee_id}}:{{d.name}}
        <router-link v-bind:to="{name: 'Viewemployee', params:{employee_id:d.employee_id}}" class="secondary-content"><i class="fa fa-eye"></i></router-link>
        </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large red"><i class="fa fa-plus"></i></router-link>
      </div>
  </div>
</template>

<script>
import db from './firebaseinit'
export default {
  name:'Dashboard',
  data(){
      return {
        employees: []
          
      }
  },
  created(){
    db.collection('employess').orderBy('dept').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        const data = {
            'id': doc.id,
            'employee_id': doc.data().employee_id,
            'name': doc.data().name,
            'position': doc.data().position,
            'dept':doc.data().dept
        }
        this.employees.push(data)
      })
    })
  }
}
</script>

