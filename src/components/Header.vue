<template>
  <header class="Header">
    <div>
      <img src="../assets/dev101.png" />
      <input placeholder="배우고 싶은 것이 있나요?" />
      <ul>
        <li><router-link to="/creatorcenter">크리에이터 지원</router-link></li>
        <li><router-link to="/login">로그인</router-link></li>
      </ul>
    </div>
    <div>
      <ul>
        <li class="categoryAll">
          <router-link to="/">
            <span></span>
            <span></span>
            <span></span>
          </router-link>
        </li>
        <li v-for="category in categories" :key="category">
          <router-link :to="{ path: `/category/${category}` }">{{
            category
          }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    categories: [
      "크리에이티브",
      "머니",
      "커리어",
      "키즈",
      "시그니처",
      "리브레",
      "스토어",
    ],
  }),
  methods: {},
};
</script>

<style lang="scss">
img {
  width: 110px;
  transform: translateX(-10px);
}
.Header {
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 1176px;
    display: flex;
    align-items: center;

    input {
      width: 400px;
      padding: 5px 10px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 1px 0px,
        rgba(41, 42, 43, 0.16) 0px 1px 3px 0px;
    }

    &:nth-child(1) {
      ul {
        margin-left: auto;
        li {
          margin-right: 20px;
          &:nth-child(2) {
            margin-right: 0;
          }
        }
      }
    }
    &:nth-child(2) {
      ul {
        width: 100%;
        justify-content: space-between;
        li {
          cursor: pointer;
          a {
            padding-bottom: 5px;
            &.exact-active {
              border-bottom: 3px solid #000;
            }
          }

          &:hover {
            font-weight: 600;
            a {
              border-bottom: 3px solid #000;
            }
          }

          &:nth-child(1) {
            span {
              display: block;
              width: 25px;
              height: 2px;
              background-color: #000;
              &:nth-child(2) {
                margin-top: 5px;
              }
              &:nth-child(3) {
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
    ul {
      display: flex;
      padding: 20px 0;
    }
  }
}
</style>
