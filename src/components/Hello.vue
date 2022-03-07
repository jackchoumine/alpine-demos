<!--
 * @Description : 
 * @Date        : 2022-03-07 15:11:32 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-03-07 15:16:11 +0800
 * @LastEditors : JackChou
-->
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
// module.exports instead of export default. This is because httpVueLoader does not resolve modules required using the export syntax yet.
module.exports = {
  data: function () {
    return {
      greeting: 'Hello',
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
