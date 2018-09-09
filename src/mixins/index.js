import config from './global/config'

import Vue from 'vue'

const mixins = {
  config
}

// Globalise mixins
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key])
})
