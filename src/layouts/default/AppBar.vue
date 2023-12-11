<template>
   
  <v-card>
    
    <v-layout align-center justify-space-around wrap>
      <v-navigation-drawer
        style="color"
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        color= 'grey-lighten-5'
      >
        <v-list-item density="compact" nav>
          <v-avatar color="amber">
            <span class="white--text headline"> AA </span>
          </v-avatar>
          
          <template v-slot:append > 
            
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-chart-bar"
            title="Dashboard"
            value="Home"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-store"
            title="Ventas"
            value="Ventas"
            to="/ventas"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-headset"
            title="Clientes"
            value="clientes"
            to="/clientes"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-package"
            title="Productos"
            value="productos"
            to="/productos"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Usuarios"
            value="usuarios"
            to="/usuarios"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="custom-main" style="height: 850px">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>


<style scoped>
/* color de fondo  */
.custom-main {
  background: #f1f2f4; 
}
</style>

// background: #e2e5e8