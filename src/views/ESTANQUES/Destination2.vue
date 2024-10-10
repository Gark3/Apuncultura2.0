<template>
  <div id="app" class="destination">
    <input
      class="form-container"
      type="text"
      v-model="query"
      placeholder="Buscar..."
      @input="filterButtons"
    />
    <div class="button-container">
      <button
        v-for="button in filteredButtons"
        :key="button.id"
        @click="navigate(button)"
        class="button"
      >
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      buttons: [
        { id: 1, label: 'Botón 1' },
        { id: 2, label: 'Botón 2' },
        { id: 3, label: 'Botón 3' },
        { id: 4, label: 'Botón 4' },
        { id: 5, label: 'Botón 5' }
      ],
      filteredButtons: []
    };
  },
  methods: {
    filterButtons() {
      if (this.query) {
        const lowerQuery = this.query.toLowerCase();
        this.filteredButtons = this.buttons.filter(button =>
          button.label.toLowerCase().includes(lowerQuery)
        );
      } else {
        this.filteredButtons = this.buttons;
      }
    },
    navigate(button) {
      this.$router.push(`/AlimentacionDiaria`);
    }
  },
  mounted() {
    // Inicialmente mostrar todos los botones
    this.filteredButtons = this.buttons;
  }
};
</script>

<style>
.button-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column; /* Alineación en columna */
}

.destination {
  background-color: #5a1236; /* Guinda */
  color: #ffffff; /* Blanco */
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: auto;
}

.home {
  background-color: #333; /* Guinda */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

.form-container {
  background-color: #ffffff; /* Blanco */
  color: #000000; /* Negro */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  box-sizing: border-box;
  box-shadow: 3px 3px 3px #000000;
}

.button {
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

.button:hover {
  background-color: #000; /* Blanco */
  color: #FFD700;
}
</style>