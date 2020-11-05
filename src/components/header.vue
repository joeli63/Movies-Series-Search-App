<template>
  <div>
    <div class="nav">
      <router-link to="/">
        <img src="../assets/images/logo.png" class="nav__logo" alt="logo">
      </router-link>
      <div
        :class="{ 'changeMenu': isMobile, 'changeMenu': isOpen }"
        class="nav__links"
      >
        <router-link @click.native="closeMenu" to="/">Home</router-link>
        <router-link @click.native="closeMenu" to="/favorites">Favorites</router-link>
      </div>
      <div
        v-if="isMobile"
        class="nav__hamburger"
        @click="menuOpen"
      >
        <div :class="{'change': isOpen}" class="nav__bar1"></div>
        <div :class="{'change': isOpen}" class="nav__bar2"></div>
        <div :class="{'change': isOpen}" class="nav__bar3"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .nav {
    background: #43A8DD;
    padding: 10px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
      padding: 10px 15px;
    }

    @media (max-width: 768px) {
      padding: 10px 15px;
    }
    
    &__logo {
      width: 100px;
      height: 80px;
    }

    &__links {
      a {
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
        margin-left: 30px;
        font-size: 20px;
        display: inline-block;

        @media (max-width: 768px) {
          display: none;
        }

        &.router-link-exact-active {
          color: #fff;
          border-bottom: 2px solid #fff;
        }
      }

      &.changeMenu {
        @media (max-width: 768px) {
          background: #43A8DD;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
          left: 0;
          height: 100vh;
          z-index: 1;

          a {
            text-decoration: none;
            font-weight: bold;
            color: #2c3e50;
            margin-left: 30px;
            font-size: 20px;
            display: block;
            text-align: center;
            position: relative;
            top: 30vh;
            font-size: 34px;
            width: 150px;
            margin: 30px auto;

            &.router-link-exact-active {
              color: #fff;
              border-bottom: 2px solid #fff;
            }

            &:first-child {
              margin-top: 0px;
            }
          }
        }
      }
    }

    &__hamburger {
      display: inline-block;
      cursor: pointer;
      z-index: 2;
    }

    &__bar1,
    &__bar2,
    &__bar3 {
      width: 35px;
      height: 5px;
      background-color: #333;
      margin: 6px 0;
      transition: 0.4s;
    }

    &__bar1 {
      &.change {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }
    }

    &__bar2 {
      &.change  {
        opacity: 0;
      }
    }

    &__bar3 {
      &.change  {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
      }
    }
  }
</style>

<script>
  export default {
    name: 'Header',

    data () {
      return {
        isOpen: false,
        isMobile: false,
        mobileMenu: false,
      }
    },
    
    mounted () {
      window.addEventListener('resize', this.onResizeHandler);
      this.onResizeHandler();
    },

    destroyed () {
      window.removeEventListener('resize', this.onResizeHandler);
    },

    methods: {
      menuOpen() {
        this.isOpen = !this.isOpen;
      },

      closeMenu () {
        this.isOpen = false;
      },

      onResizeHandler () {
        this.isMobile = window.innerWidth < 768;
      },
    },
  }
</script>
