<template>
  <div class="table-content">

  </div>
</template>

<script>
export default {
  name: 'tableContent',
  data () {
    return {

    }
  },
  props: ['type'],
  components: {
  },
  computed: {
  },
  mounted () {
    console.log(this.type)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
