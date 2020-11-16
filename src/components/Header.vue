<template>
  <header class="Header">
    <div>
      <img src="../assets/dev101.png" />
      <input placeholder="배우고 싶은 것이 있나요?" />
      <ul>
        <li><a href="/">크리에이터 지원</a></li>
        <li><a href="/">로그인</a></li>
      </ul>
    </div>
    <div>
      <ul>
        <li class="categoryAll">
          <a href="/">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </li>
        <li v-for="category in categories" :key="category">
          <a href="/">{{ category }}</a>
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
    }

    &:nth-child(1) {
      ul {
        margin-left: auto;
      }
    }
    &:nth-child(2) {
      ul {
        width: 100%;
        justify-content: space-between;
        li {
          cursor: pointer;

          &:hover {
            font-weight: 600;
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
