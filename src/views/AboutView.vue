<template>
  <div class="destination">
      <h1>Registro de Usuario</h1>
      <form @submit.prevent="submitForm" class="form-container">
          <div class="form-group">
              <label for="company-name">Nombre de la Empresa</label>
              <input type="text" id="company-name" name="company-name" required>
          </div>
          <div class="form-group">
              <label for="full-name">Nombre Completo</label>
              <input type="text" id="full-name" name="full-name" required>
          </div>
          <div class="form-group">
              <label for="phone">Número de Teléfono</label>
              <input type="tel" id="phone" name="phone" required>
          </div>
          <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" name="password" required>
          </div>
          <div class="form-group">
              <label for="confirm-password">Repetir Contraseña</label>
              <input type="password" id="confirm-password" name="confirm-password" required>
          </div>
          <div class="form-group">
              <label for="rfc">RFC</label>
              <input type="text" id="rfc" name="rfc" required>
          </div>
          <div class="form-group">
              <label for="location">Ubicación</label>
              <input type="text" id="location" name="location" required>
          </div>
          <button type="submit" class="btn-register">Registrar</button>
      </form>
    </div>
</template>

<script>
export default {
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
