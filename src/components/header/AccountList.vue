<template>
  <div class="header-flyout-accountList">
    <div class="header-arrow">
      <div class="header-arrow-inner" />
    </div>
    <div class="header-template header-flyout-content">
      <div class="header-al-container">
        <div class="header-al-user">
          <h4>
            <span>Hello,</span>
            jone
          </h4>
        </div>

        <div class="header-al-wishlist">
          <div class="header-title">Your Lists</div>
          <router-link to="/">
            <span class="nav-text"> Create a List </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text"> Find a List or Registry </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text"> AmazonSmile Charity Lists </span>
          </router-link>
        </div>
        <div class="header-al-account">
          <div class="header-title">Your Account</div>
          <router-link to="/">
            <span class="nav-text"> Account </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text"> Orders </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text"> Recommendations </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text"> Browsing History </span>
          </router-link>
          <router-link to="/">
            <span class="nav-text">Watchlist</span>
          </router-link>
          <router-link to="/">
            <span class="nav-text">Content & Devices</span>
          </router-link>
          <router-link to="/">
            <span class="nav-text">Subscribe & Save Items</span>
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
      isOpen: false,

      dataList: [
        {
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
              text: "AmazonSmile Charity Lists",
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
            {
              text: "Sign Out",
              link: "/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
