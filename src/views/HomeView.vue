<template >
  
  <div class="home" >
    <div class="button-grid" background="9824b3e4-ff33-11e9-9853-0231b47980f0.jpeg">
      <button v-for="button in buttons" :key="button" @click="navigate(button)" class="grid-button">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      buttons: [`AGREGAR ESTANQUE`, `ESTANQUES`, `CALIDAD AGUA`, `DIETA`, `FICHA TECNICA`, `CRECIMIENTO`, `COSECHA`, `TRASLADO`,`ADICION`,`TRATAMIENTOS`,`CUARENTENA`],
    };
  },
  methods: {
    navigate(button) {
      this.$router.push(`/${button}`);
    },
  },
};
</script>

<style scoped>
.home {
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
}

.grid-button {
  background-color: #5A1236; /* Dorado */
  color: #999; /* Negro */
  border: none;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-button:hover {
  background-color: #000; /* Blanco */
  color: #FFD700;
}
</style>
