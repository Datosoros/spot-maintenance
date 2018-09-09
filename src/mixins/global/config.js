import Config from '@/config'

export default {
  beforeCreate () {
    this.$app_config = Config
  }
}
