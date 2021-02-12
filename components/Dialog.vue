<template>
<v-container>
  <v-row justify="center" align="center">
    <v-col v-for="(drink, i) in drinks" :key="i" cols=8 sm=4 md=3 lg=3 xl=3>
      <v-dialog
        max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-card
            color="rgba(255,255,255,0)"
            flat
            v-bind="attrs"
            v-on="on"
            class="ma-5"
          >
          <v-img :src="drink.image" height="150" width="150">
          </v-img>
          <h3 class="fraptitle" small align="center" justify="center">{{ drink.name }}</h3>
          <v-card-subtitle class="fraptitle pt-1">{{ drink.subtitle }}</v-card-subtitle>
          </v-card>
        </template>
        
        <!-- モーダル開いた時 -->
        <v-card tile class="card">
          <v-img
            :src="drink.image"
            height="200px"
          ></v-img>
          <h2 class="font-weight-black modah2" justify="center" align="center">
            {{ drink.name }}
          </h2>
          <p justify="center" align="center">
            {{ drink.total }}
          </p>
          <v-spacer></v-spacer>
          <v-card-text align="center">
            <div justify="center" v-for="(order, i) in drink.orders" :key="i">
              <p class="pa-1 mr-0 orderli" align="center">
                <v-icon color="green">mdi-music-accidental-sharp</v-icon>
                {{ order }}
              </p>
            </div>
          </v-card-text>
        </v-card>
        
      </v-dialog>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
      show: false,
    }),
    computed: {
    ...mapState({
      drinks: 'drinks'
    }),
    },
  }
</script>

<style scoped>
.fraptitle {
  font-size: small;
  font-family: 'Bananaslip';
  white-space: nowrap;
  color: #fff;
}

* {
  font-family: 'Bananaslip';
}

.modah2 {
  white-space: nowrap;
  letter-spacing: -0.08em;  
}

.orderli {
  border: 1px solid black;
  border-radius: 25px;
  width: 90%;
}

</style>
