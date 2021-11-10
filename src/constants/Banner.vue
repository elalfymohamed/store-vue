<template>
  <div class="banner">
    <div class="banner-content">
      <div class="banner-content_carousel">
        <div class="carousel carousel-slider" style="width: 100%">
          <div class="carousel-slider-wrapper">
            <ul
              class="carousel-slider slider animated"
              :style="{
                transform: `translate3d(-${x}00%, 0px, 0px)`,
                transitionDuration: ` 350ms`,
              }"
            >
              <li class="slide" v-for="banner in banners" :key="banner">
                <router-link to="/">
                  <div>
                    <img
                      :src="require(`@/assets/image/banner/${banner.image}`)"
                      alt="banner"
                    />
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "Banner",

  setup() {
    const banners = ref([
      {
        image: "banner1.jpg",
      },
      {
        image: "banner2.jpg",
      },
      {
        image: "banner3.jpg",
      },
      {
        image: "banner4.jpg",
      },
      {
        image: "banner1.jpg",
      },
      {
        image: "banner2.jpg",
      },
    ]);

    const x = ref(1);

    const changeSlide = () => {
      x.value = x.value === banners.value.length - 2 ? 1 : x.value + 1;
    };

    const addClassSlide = () => {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide, i) => {
        if (slide.classList.contains("selected")) {
          slide.classList.remove("selected");
        }
        if (i === x.value) {
          slide.classList.add("selected");
        }
      });
    };

    onMounted(() => {
      setInterval(() => {
        changeSlide();
        addClassSlide();
      }, 3000);
    });

    return {
      banners,
      x,
    };
  },
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;

  .banner-content {
    outline: none;

    .banner-content_carousel {
      position: relative;
      margin: 0;
      overflow: hidden;

      .carousel-slider-wrapper {
        overflow: hidden;
        margin: auto;
        width: 100%;
        transition: height 0.15s ease-in;

        .slider {
          display: flex;

          .slide {
            flex-flow: column;
          }
        }
      }
    }
  }
}

.carousel {
  .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;

    .animated {
      transition: all 0.35s ease-in-out;
    }
  }
  .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;

    img {
      width: 100%;
      pointer-events: none;
      vertical-align: top;
    }
  }
}
</style>
