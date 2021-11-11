<template>
  <nav class="header-bottom">
    <div class="header-bottom__content">
      <diV class="content-btn">
        <button class="btn menu-btn" type="buttom" data-target="menu">
          <icon icon="bars" />
          <span>All</span>
        </button>
      </diV>
      <div class="content-menu__link">
        <ul>
          <li v-for="link in menuLink" :key="link">
            <router-link :to="link.path" tabindex="0">
              <span>{{ link.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "BottomNav",
  components: {
    icon: FontAwesomeIcon,
  },
  data() {
    return {
      menuLink: [
        {
          name: "electronics",
          path: "/electronics",
        },
        {
          name: "jewelery",
          path: "/jewelery",
        },
        {
          name: "men's clothing",
          path: "/men's clothing",
        },
        {
          name: "women's clothing",
          path: "/women's clothing",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.header-bottom {
  background-color: rgba(35, 47, 62, 2);
  padding: 0.4rem 2rem;

  .header-bottom__content {
    display: flex;
    align-items: center;

    .content-btn {
      margin-left: 1rem;

      .btn {
        background-color: transparent;
        border: none;
        cursor: pointer;

        span {
          font-size: 1rem;
          margin-left: 0.2rem;
        }
      }
      .menu-btn {
        color: #fff;
        font-size: 1.3rem;
      }
    }
  }

  .content-menu__link {
    padding-left: 1.5rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      list-style: none;
      box-sizing: content-box;
      padding: 0;

      li {
        margin: 0 1rem 0 0;
        a {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          display: block;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
