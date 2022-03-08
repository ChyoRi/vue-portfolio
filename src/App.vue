<template>
  <main>
    <Header />
    <SideMenu />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" class="contents" />
      </transition>
    </router-view>
  </main>
</template>

<script>
import { useComponent } from '@hook';

export default {
  name: 'App',
  components: {
    Header: useComponent(() => import('@/pages/Common/Header')),
    SideMenu: useComponent(() => import('@/pages/Common/SideMenu'))
  },
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
main {
  @include size(100%, 100%);
  & > .contents {
    @include size(calc(100% - $headerHeight), calc(100% - $headerHeight));
    @include position(fixed, $headerHeight, 0);
    background-color: $whiteGray;
    padding: 10px;
  }
}
</style>
