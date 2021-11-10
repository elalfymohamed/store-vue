<template>
  <div class="header-flyout-accountList header-flyout" id="flyout-accountList">
    <div class="header-arrow">
      <div class="header-arrow-inner" />
    </div>
    <div class="header-template header-flyout-content">
      <div class="header-al-container">
        <div class="header-al-user">
          <h4>
            <span>Hello,</span>
            user
          </h4>
        </div>
        <div class="header-al-wishlist">
          <div class="header-title">Your Lists</div>
          <router-link :to="list.link" v-for="list in lists" :key="list">
            <span class="nav-text"> {{ list.text }} </span>
          </router-link>
        </div>
        <div class="header-al-account">
          <div class="header-title">Your Account</div>
          <router-link :to="list.link" v-for="list in account" :key="list">
            <span class="nav-text"> {{ list.text }} </span>
          </router-link>
          <router-link to="/" class="nav-action-button" role="signout">
            <span class="nav-action-inner">Sign Out</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountList",

  data() {
    return {
      lists: [
        {
          text: "Create a List",
          link: "/",
        },
        {
          text: "Find a List or Registry",
          link: "/",
        },
        {
          text: "Charity Lists",
          link: "/",
        },
      ],
      account: [
        {
          text: "Account",
          link: "/",
        },
        {
          text: "Orders",
          link: "/",
        },
        {
          text: "Recommendations",
          link: "/",
        },
        {
          text: "Browsing History",
          link: "/",
        },
        {
          text: "Watchlist",
          link: "/",
        },
        {
          text: "Content & Devices",
          link: "/",
        },
        {
          text: "Subscribe & Save Items",
          link: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-flyout-accountList {
  display: block;
  position: absolute;
  top: 4.6rem;
  right: 1rem;
  z-index: 2;
}
.header-flyout {
  width: 490px;
  margin: -3px 0 0 -2px;
  border-radius: 3px;
  background-color: #fff;
  overflow: visible;
  border: 1px solid #ddd;
  padding: 14px;
  zoom: 1;
  font-size: 0.9rem;
  font-family: inherit;
  line-height: normal;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  .header-arrow {
    border-style: solid;
    border-width: 0.5rem;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 9px solid #ccc;
    position: absolute;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    top: -9px;
    right: 2.5rem;
  }
  .header-arrow-inner {
    border-style: solid;
    border-width: 0.5rem;
    border-color: transparent;
    border-top-width: 0;
    border-bottom: 9px solid #fff;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 0;
    right: -0.5rem;
  }

  .header-al-container {
    width: 450px;
    float: right;

    .header-al-user {
      text-align: center;
      border-bottom: 1px solid #eee;
      margin-bottom: 1.3rem;
      padding-bottom: 1.3rem;

      h4 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #333;
        margin: 0;
        padding: 0;

        span {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }
      }
    }

    .header-al-wishlist {
      float: left;
      margin-right: 1rem;
      width: 200px;
    }
    .header-al-account {
      float: left;
      width: 200px;
      border-left: 1px solid #eee;
      padding-left: 1rem;
    }
    .header-title {
      font-size: 1rem;
      font-weight: 700;
      padding-bottom: 0.5rem;
    }
    a {
      display: block;
      clear: both;
      font-size: 0.8rem;
      font-weight: 500;
      color: #333;
      padding: 0.5rem 0;
      text-decoration: none;
      margin: 0;
      font-family: inherit;

      .nav-text {
        display: block;
        font-size: 0.8rem;
        font-weight: 400;
        color: #444;
        white-space: nowrap;
        word-wrap: break-word;
      }
    }
  }
}
</style>
