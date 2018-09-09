<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-tabs class="app-tabs app-status-tabs" v-model="active" color="cyan" fixed-tabs grow slider-color="orange">
        <v-tab class="app-status-tabs--item" v-for="(status, statusType) in statusList" :key="statusType">
          <strong class="app-status-tabs--count">{{ status.jobs.length || '0' }}</strong>
          <span class="app-status-tabs--title">{{ status.title || statusType }}</span>
        </v-tab>
      </v-tabs>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      active: 0
    }
  },
  asyncComputed: {
    jobs () {
      return axios.get(this.$app_config.firebase.files.list)
        .then((response) => {
          return response.data.map((job) => {
            if (job.RouteID === '17447') {
              job.status = 'Upcoming'
            } else if (job.RouteID === '17496') {
              job.status = 'Done'
            } else {
              job.status = 'In progress'
            }

            return job
          })
        })
    }
  },
  computed: {
    // jobs () {
    //   return [
    //     {
    //       status: 'Upcoming'
    //     }
    //   ]
    // },
    statusList () {
      return {
        Upcoming: {
          jobs: (this.jobs || []).filter(job => job.status === 'Upcoming')
        },
        'In progress': {
          jobs: (this.jobs || []).filter(job => job.status === 'In progress')
        },
        Done: {
          jobs: (this.jobs || []).filter(job => job.status === 'Done')
        }
      }
    }
  }
}
</script>

<style>
.app-tabs {
  margin: -16px;
  margin-bottom: 0;
}

.app-status-tabs .v-tabs__container {
  height: auto;
}

.app-status-tabs--item > .v-tabs__item {
  display: block;
}

.app-status-tabs--count,
.app-status-tabs--title {
  display: block;
}

.app-status-tabs--count {
  font-size: 125%;
  padding-top: 8px;
}

.app-status-tabs--title {
  text-transform: initial;
  font-weight: 400;
  padding-bottom: 8px;
}
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
