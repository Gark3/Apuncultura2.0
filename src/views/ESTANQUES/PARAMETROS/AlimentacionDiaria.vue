<template>
    <div id="app">
      <h1>{{ title }}</h1>
      <form @submit.prevent="saveData">
        <div>
          <label for="foodType">Tipo de Alimento:</label>
          <select v-model="foodType" id="foodType" required>
            <option value="" disabled>Seleccionar</option>
            <option v-for="type in foodTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div>
          <label for="batch">Lote de Alimento:</label>
          <input type="text" v-model="batch" id="batch" required />
        </div>
        <div>
          <label for="kg">KG de Alimento:</label>
          <input type="number" v-model="kg" id="kg" required />
        </div>
        <div>
          <label for="mortality">Mortalidad:</label>
          <input type="number" v-model="mortality" id="mortality" required />
        </div>
        <div>
          <label for="climate">Clima:</label>
          <input type="text" v-model="climate" id="climate" required />
        </div>
        <div>
          <label for="comments">Comentarios:</label>
          <textarea v-model="comments" id="comments"></textarea>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        foodTypes: ['Tipo 1', 'Tipo 2', 'Tipo 3'], // Puedes añadir más tipos aquí
        foodType: '',
        batch: '',
        kg: '',
        mortality: '',
        climate: '',
        comments: ''
      };
    },
    methods: {
      saveData() {
        const data = {
          foodType: this.foodType,
          batch: this.batch,
          kg: this.kg,
          mortality: this.mortality,
          climate: this.climate,
          comments: this.comments
        };
        console.log('Datos guardados:', data);
        // Aquí puedes hacer la lógica para guardar los datos, por ejemplo, enviarlos a una API.
        this.resetForm();
      },
      resetForm() {
        this.foodType = '';
        this.batch = '';
        this.kg = '';
        this.mortality = '';
        this.climate = '';
        this.comments = '';
      }
    }
  };
  </script>
  
  <style>
  form {
    max-width: 400px;
    margin: auto;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  