<template>
  <div id="app2">
    {{ message }}
  </div>
</template>

<script>
var app2 = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "헬로 뷰다",
    };
  },
});
</script>
