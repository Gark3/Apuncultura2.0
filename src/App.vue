<template>
  <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Inicio de Sesión</title>
       <link rel="stylesheet" href="styles.css">
   </head>
  <nav v-show="!isVisible">
    <router-link to="/estanque">ESTANQUES</router-link> |
    <router-link to="/about">ALMACEN</router-link>
  </nav>
  <router-view/>
  <header v-show="isVisible">
           <div class="header-container">
           </div>
       </header>
  <body background="9824b3e4-ff33-11e9-9853-0231b47980f0.jpeg" v-show="isVisible">
       <div class="login-container" background="9824b3e4-ff33-11e9-9853-0231b47980f0.jpeg">
           <h1>Iniciar Sesión</h1>
           <form action="#" method="post">
               <div class="input-group">
                   <label for="username">Nombre de Usuario</label>
                   <input type="text" id="username" name="username" required>
               </div>
               <div class="input-group">
                   <label for="password">Contraseña</label>
                   <input type="password" id="password" name="password" required>
               </div>
               <button type="submit" class="btn-login" :key="button" @click="login()" @click.prevent="iniciarSesion()">Iniciar Sesión</button>
               <div class="links">
                   <button  href="#" class="btn-register" @click="regiserUser()" @click.prevent="iniciarSesion()">Registrar</button>
                   <a href="#" class="btn-register">Olvidé la Contraseña</a>
               </div>
           </form>
       </div>
   </body>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true // Inicialmente no se muestra
    };
  },
  methods: {
    iniciarSesion() {
      this.isVisible = !this.isVisible; // Cambia el estado de isVisible
    },
    login() {
      this.$router.push(`/estanque`);
    },
    regiserUser() {
      this.$router.push(`/RegistroUsuarios`);
    },
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #182a3f;
}

nav a {
  font-weight: bold;
  color: #6b0f0f;
}

nav a.router-link-exact-active {
  color: #6b0f0f;
}
header {
       background-color: #000000; /* Guinda */
       color: #ffffff;
       padding: 0;
       text-align: start;
   }
   
   .header-container h1 {
    align-items: center;
       margin: 0;
       font-size: 14px;
   }
   body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4; /* Fondo de página claro */
       
       justify-content: center;
       align-items: flex-start;
       height: 100vh;
       margin: 0; 
       padding: 0;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       text-align: center;
       min-height: 100vh;
   }
   
   .login-container {
     /* Dorado */
    color: #999; /* Negro */
    border: none;
    padding: 15px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   
   h1 {
       color: #ffffff; /* Guinda */
       margin-bottom: 20px;
       background-color: #5A1236;
   }
   
   .input-group {
       color: #ffffff;
       background-color: #5A1236;
       margin-bottom: 15px;
   }
   
   input {
       width: calc(100% - 20px);
       padding: 10px;
       border: 1px solid #c8102e; /* Guinda */
       border-radius: 4px;
       font-size: 16px;
   }
   
   input:focus {
       border-color: #d4af37; /* Dorado */
       outline: none;
   }
   
   button, .btn-register, .btn-forgot-password {
       display: inline-block;
       padding: 10px 20px;
       margin: 5px;
       border: none;
       border-radius: 4px;
       color: #ffffff;
       text-decoration: none;
       font-size: 16px;
       cursor: pointer;
   }
   
   .btn-login {
       background-color: #c8102e; /* Guinda */
   }
   
   .btn-login:hover {
       background-color: #a00c28; /* Guinda más oscuro */
   }
   
   .btn-register {
       background-color: #d4af37; /* Dorado */
   }
   
   .btn-register:hover {
       background-color: #b89b2e; /* Dorado más oscuro */
   }
   
   .btn-forgot-password {
       background-color: #c8102e; /* Guinda */
   }
   
   .btn-forgot-password:hover {
       background-color: #a00c28; /* Guinda más oscuro */
   }
   
   .links {
       margin-top: 10px;
   }
   
   .links a {
       display: inline-block;
       color: #c8102e; /* Guinda */
       text-decoration: none;
       font-size: 14px;
   }
   
   .links a:hover {
       text-decoration: underline;
   }
</style>
