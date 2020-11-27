<template>
    <v-data-table
    style="width:98%"
    hide-default-header 
    hide-default-footer
    disable-pagination
    :headers="headers"
    :items="students"
    >
      <template v-slot:item="props">
        <tr>
            <td><a style="text-decoration:none;color:black" href="/weeklog">{{props.item.name}}</a></td>
          <td>
              <v-container class="pa-0">
                <v-container class="pa-0" v-if="props.item.mon === 'Monday'">
                  <a style="text-decoration:none;color:black;" href="/dayLog">{{props.item.mon}}</a>
                </v-container>

            <a style="text-decoration:none;" href="/singleLog">
                <v-icon style="font-size:34px;color: orange; fill: currentColor;" v-if="props.item.mon === 'missing'">mdi-alert-circle</v-icon>

                <v-container v-if="props.item.mon === 'read'">
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:gray;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;">mdi-check</v-icon>
                </v-container>

                <v-container v-if="props.item.mon === 'unread'" >
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:blue;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;color:blue;fill:currentColor;">mdi-check</v-icon>
                </v-container>
            </a>
              </v-container>
          </td>


          <td>
              <v-container class="pa-0">
                <v-container class="pa-0" v-if="props.item.tues === 'Tuesday'">
                  <a style="text-decoration:none;color:black;" href="/dayLog">{{props.item.tues}}</a>
                </v-container>
               
            <a style="text-decoration:none;" href="/singleLog">
                <v-icon style="font-size:34px;color: orange; fill: currentColor;" v-if="props.item.tues === 'missing'">mdi-alert-circle</v-icon>

                <v-container v-if="props.item.tues === 'read'">
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:gray;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;">mdi-check</v-icon>
                </v-container>

                <v-container v-if="props.item.tues === 'unread'" >
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:blue;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;color:blue;fill:currentColor;">mdi-check</v-icon>
                </v-container>
            </a>
              </v-container>
          </td>


          <td>
              <v-container class="pa-0">
                <v-container class="pa-0" v-if="props.item.wed === 'Wednesday'">
                  <a style="text-decoration:none;color:black;" href="/dayLog">{{props.item.wed}}</a>
                </v-container>
               
            <a style="text-decoration:none;" href="/singleLog">
                <v-icon style="font-size:34px;color: orange; fill: currentColor;" v-if="props.item.wed === 'missing'">mdi-alert-circle</v-icon>

                <v-container v-if="props.item.wed === 'read'">
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:gray;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;">mdi-check</v-icon>
                </v-container>

                <v-container v-if="props.item.wed === 'unread'" >
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:blue;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;color:blue;fill:currentColor;">mdi-check</v-icon>
                </v-container>
            </a>
              </v-container>
          </td>


          <td>
              <v-container class="pa-0">
                <v-container class="pa-0" v-if="props.item.thu === 'Thursday'">
                  <a style="text-decoration:none;color:black;" href="/dayLog">{{props.item.thu}}</a>
                </v-container>
               
            <a style="text-decoration:none;" href="/singleLog">
                <v-icon style="font-size:34px;color: orange; fill: currentColor;" v-if="props.item.thu === 'missing'">mdi-alert-circle</v-icon>

                <v-container v-if="props.item.thu === 'read'">
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:gray;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;">mdi-check</v-icon>
                </v-container>

                <v-container v-if="props.item.thu === 'unread'" >
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:blue;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;color:blue;fill:currentColor;">mdi-check</v-icon>
                </v-container>
            </a>
              </v-container>
          </td>


          <td>
              <v-container class="pa-0">
                <v-container class="pa-0" v-if="props.item.fri === 'Friday'">
                  <a style="text-decoration:none;color:black;" href="dayLog">{{props.item.fri}}</a>
                </v-container>
               
            <a style="text-decoration:none;" href="/singleLog">
                <v-icon style="font-size:34px;color: orange; fill: currentColor;" v-if="props.item.fri === 'missing'">mdi-alert-circle</v-icon>

                <v-container v-if="props.item.fri === 'read'">
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:gray;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;">mdi-check</v-icon>
                </v-container>

                <v-container v-if="props.item.fri === 'unread'" >
                  <div class="d-flex justify-center align-center" style="color:white;margin-left:24px;background-color:blue;height:20px;width:20px;border-radius:50%">{{props.item.counter}}</div>
                  <v-icon style="font-size:34px;color:blue;fill:currentColor;">mdi-check</v-icon>
                </v-container>
            </a>
              </v-container>
          </td>



    
        </tr>

    </template>
    </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'YourLogDataTable',
    data() {
      return {
      headers: [
        { text: 'Student', align: 'start', value: 'name' },
        { text: 'Monday', value: 'mon' },
        { text: 'Tuesday', value: 'tues' },
        { text: 'Wednesday', value: 'wed' },
        { text: 'Thursday', value: 'thu' },
        { text: 'Friday', value: 'fri' },
      ],
      students: [
          { name: 'Student', mon: 'Monday', tues: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', counter: '' },
          { name: 'Nils Berg', mon: 'missing', tues: 'read', wed: 'unread', thu: 'unread', fri: 'read', counter: '5' },
          { name: 'Linus Reynold', mon: 'missing', tues: 'missing', wed: 'read', thu: 'unread', fri: 'unread', counter: '1' },
          { name: 'Fredrik Koran', mon: 'read', tues: 'unread', wed: 'read', thu: 'missing', fri: 'unread', counter: '3' },
          { name: 'Jojsef Lindgren', mon: 'missing', tues: 'read', wed: 'read', thu: 'unread', fri: 'read', counter: '1' },
          { name: 'Lil Pump', mon: 'unread', tues: 'missing', wed: 'missing', thu: 'read', fri: 'missing', counter: '2' },
        ]
        }
    },

})
</script>