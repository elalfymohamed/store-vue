<template>
  <div class="header-top">
    <div class="header-top__logo">
      <router-link to="/">
        <img
          src="../../assets/image/icon/icon.png"
          alt="icon"
          width="60"
          height="70"
        />
      </router-link>
    </div>
    <div class="header-top__search">
      <div class="search-input">
        <input type="text" class="input" />
      </div>
      <div class="search-button">
        <button class="btn search-btn">
          <icon icon="search" />
        </button>
      </div>
    </div>
    <div class="header-top__content">
      <div class="content-heart">
        <icon icon="heart" />
        <span v-if="countHeart">{{ countHeart }}</span>
      </div>
      <div class="content-cart">
        <icon icon="shopping-cart" />
        <span v-if="countCart">{{ countCart }}</span>
        <p>Basket</p>
      </div>
      <div class="content-user" id="user-avatar">
        <div class="user-avatar" @click="$emit('toggle-click-list')">
          <img
            src="../../assets/image/avatar/avataaars.svg"
            alt="user-avatar"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "TopNav",
  components: {
    icon: FontAwesomeIcon,
  },
  emits: ["toggle-click-list"],

  data() {
    return {
      countHeart: 0,
      countCart: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.header-top {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  height: 70px;
  background-color: rgba(19, 25, 33, 2);
  padding: 0.3rem 2.5rem;

  .header-top__logo {
    display: flex;
    flex-grow: 0;
    align-items: center;
    margin-top: 0.3rem;
    margin-right: 2rem;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .header-top__search {
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin-right: 2rem;

    .search-input {
      width: 100%;
      display: flex;

      .input {
        padding: 0.5rem 0.8rem;
        width: 100%;
        height: 2.5rem;
        border: none;
        border-bottom-left-radius: 0.5rem;
        border-top-left-radius: 0.5rem;
        background-color: #fff;
        color: #000;
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 0.9rem;
        font-weight: bold;

        &:focus-visible {
          outline: none;
        }
      }
    }
    .search-button {
      display: flex;
      flex-grow: 1;

      .btn {
        padding: 0.8rem 1.1rem;
        background-color: rgb(251, 191, 39, 1);
        border: none;
        color: #000;
        cursor: pointer;
        opacity: 1;
      }
      .search-btn {
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }
    &:hover {
      .search-button {
        .btn {
          background-color: #ffb400;
        }
      }
    }
  }

  .header-top__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* flex-grow: 1; */
    /* margin-right: 2rem; */

    .content-heart {
      position: relative;
      margin-right: 1.2rem;
      svg {
        color: #fff;
        font-size: 2rem;
      }
      span {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        background-color: #ffb400;
        border-radius: 50%;
        padding: 0.1rem 0.4rem;
        color: #000;
        font-size: 0.7rem;
      }
    }
    .content-cart {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-right: 1rem;
      margin-left: 0.5rem;
      cursor: pointer;
      svg {
        color: #fff;
        font-size: 2rem;
      }
      span {
        position: absolute;
        top: 0.2rem;
        right: 2rem;
        background-color: #ffb400;
        border-radius: 50%;
        padding: 0.1rem 0.4rem;
        color: #000;
        font-size: 0.7rem;
      }
      p {
        margin-top: 1.5rem;
        font-size: 0.8rem;
        color: #fff;
        font-weight: bold;
      }
      &:hover {
        p {
          text-decoration: underline;
        }
      }
    }
    .content-user {
      margin-left: 0.5rem;

      .user-avatar {
        cursor: pointer;
        background-color: #ffb400;
        border-radius: 50%;
        padding: 0.1rem 0.3em;

        &:hover {
          img {
            filter: brightness(0.9);
          }
          background-color: #ffb300e8;
        }
      }
    }
  }
}
</style>
