<template>
  <div class="destination">
    <h1>Formulario de Estanque</h1>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="nombre">Nombre del estanque:</label>
        <input type="text" id="nombre" v-model="nombre" required />
      </div>
      <div class="form-group">
        <label for="forma">Forma:</label>
        <input type="text" id="forma" v-model="forma" required />
      </div>
      <div class="form-group">
        <label for="profundidad">Profundidad:</label>
        <input type="number" id="profundidad" v-model="profundidad" required />
      </div>
      <div class="form-group">
        <label for="superficie">Superficie:</label>
        <input type="number" id="superficie" v-model="superficie" required />
      </div>
      <div class="form-group">
        <label for="infraestructura">Infraestructura:</label>
        <input type="text" id="infraestructura" v-model="infraestructura" required />
      </div>
      <div class="form-group">
        <label for="ubicacion">Ubicación:</label>
        <GMapMap :center="center" :zoom="10" style="width: 100%; height: 400px;">
          <GMapMarker :position="center" />
        </GMapMap>
      </div>
      <button type="submit" class="submit-button">Enviar</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { GoogleMap, Marker } from '@fawmi/vue-google-maps';

export default {
  name: 'Destination1',
  components: {
    GMapMap: GoogleMap,
    GMapMarker: Marker,
  },
  setup() {
    const center = ref({ lat: 25.546956, lng: -108.480669 });

    return {
      center,
    };
  },
  data() {
    return {
      nombre: '',
      forma: '',
      profundidad: '',
      superficie: '',
      infraestructura: '',
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes manejar el envío del formulario
      alert('Formulario enviado');
    },
  },
};
</script>

<style scoped>
.destination {
  background-color: #5a1236; /* Guinda */
  color: #ffffff; /* Blanco */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;
  overflow: auto;
}

.form-container {
  background-color: #ffffff; /* Blanco */
  color: #000000; /* Negro */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  box-shadow: 3px 3px 3px #000000;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 90%;
  padding: 10px;
  border: 1px solid #3fa267;
  border-radius: 5px;
  box-shadow: 3px 3px 3px #000000;
}

.submit-button {
  background-color: #FFD700; /* Dorado */
  color: #000; /* Negro */
  border: none;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #8B0000; /* Guinda */
  color: #ffffff; /* Blanco */
}
</style>
