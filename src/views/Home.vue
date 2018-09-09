<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-tabs class="app-tabs app-status-tabs" v-model="active" color="cyan" fixed-tabs grow slider-color="orange">
        <v-tab class="app-status-tabs--item" v-for="(status, statusType) in statusList" :key="statusType">
          <strong class="app-status-tabs--count">{{ status.count || '0' }}</strong>
          <span class="app-status-tabs--title">{{ status.title || statusType }}</span>
        </v-tab>
      </v-tabs>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    statusList () {
      return {
        Upcoming: {
          count: 5
        },
        'In progress': {
          count: 2
        },
        Done: {
          count: 10
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

.app-status-tabs--item > .v-tabs__item {
  display: block;
}

.app-status-tabs--count,
.app-status-tabs--title {
  display: block;
}

.app-status-tabs--count {
  font-size: 125%;
}

.app-status-tabs--title {
  text-transform: initial;
  font-weight: 400;
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
