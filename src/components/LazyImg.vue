<template>
  <div ref="loadimg">
    <img :src="imgsrc">
  </div>
</template>

<script>
export default {
  name: "LazyImg",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      image: new Image(),
      imgsrc: this.src
    };
  },
  watch: {
    src: function(newval) {
      const loadingComponent = this.$loading.open({
        container: this.$refs.loadimg
      });
      this.image.onload = () => (
        (this.imgsrc = this.image.src), loadingComponent.close()
      );
      this.image.src = newval;
    }
  }
};
</script>
