<template>
  <section>
    <h1><span>Vue App</span>이 준비되었습니다.</h1>
    <article>
      <p>State: {{ number }}</p>
      <button @click="upDownFn(+1)">UP</button>
      <button @click="upDownFn(-1)">DOWN</button>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  methods: {
    upDownFn (n) {
      this.$store.commit('setNumber', this.number + n);
    }
  },
  computed: {
    ...mapState([
      'number'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
section {
  text-align: center;

  span {
    color: $green;
  }
  p {
    padding: 50px 0 20px;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>