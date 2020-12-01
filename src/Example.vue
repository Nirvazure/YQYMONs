<template>
  <div>
    <Component1></Component1>
    <input v-model="b" />
  </div>
</template>

<script>
export default {
  data: () => ({
      a:2,
      b:3
  }),
  components:{
      Component1
  },
  created() {},
  mounted() {},
  methods() {
      your_method(){
          console.log(1)
      }
  },
  filters:{
      idToUrl:(id)=>{

      }
  },
  computed() {
      c:()=>{
          return a+b
      }
  },
  watch{

  }
};
</script>

<style scoped>
.h1 {
  font-size: 12px;
}
</style>