<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 30px;
  padding: 0 30px;
  color: #999;
  border-bottom: 12px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  margin-top: 40px;
}

.info-price .n-price {
  font-size: 60px;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 40px;
  margin-left: 8px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 26px;
  padding: 6px 8px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 8px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -14px;
}

.info-other {
  margin-top: 30px;
  line-height: 90px;
  display: flex;
  font-size: 36px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 90px;
}

.info-service-item img {
  width: 40px;
  height: 40px;
  position: relative;
  top: 8px;
}

.info-service-item span {
  font-size: 32px;
  color: #333;
}
</style>
