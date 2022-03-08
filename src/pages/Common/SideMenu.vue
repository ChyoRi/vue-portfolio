<template>
  <aside wrap>
    <ul>
      <li v-for="item, idx in menuList" :key="idx">
        <router-link :to="item.to" v-text="item.name" active-class="active" />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: () => ({
    menuList: [
      { id: 1, name: 'HOME', to: '/' },
      { id: 2, name: 'About', to: '/about' },
    ]
  }),
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
[wrap] {
  @include position(fixed, $headerHeight, unset, unset, 0);
  width: $headerHeight;
  height: calc(100% - $headerHeight);
  border-right: 1px solid red;

  ul {
    li {
      a {
        &.active {
          color: red;
        }
      }
    }
  }
}
</style>