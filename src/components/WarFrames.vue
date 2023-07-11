<template>
  <v-col cols="12" lg="3" md="4">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="url" height="200px" cover></v-img>

      <v-card-title> {{ title }} </v-card-title>

      <v-card-subtitle>
        {{ disc }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="green darken-1" text @click="dialog = true"> Show </v-btn>

        <v-spacer></v-spacer>
        <v-btn color="red accent-1" text @click="deleteFrame()"> delete </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialog" width="600px">
      <v-card class="mx-auto">
        <v-img :src="url" height="200px" cover></v-img>

        <v-card-title> {{ title }} </v-card-title>

        <v-card-subtitle>
          {{ disc }}
        </v-card-subtitle>

        <template>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(proper, i) in propers" :key="i">
              <v-expansion-panel-header>{{
                proper.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ proper.discription }}
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header> abilities </v-expansion-panel-header>
              <v-expansion-panel-content class="mt-2">
                <v-row class="">
                  <v-col cols="6">
                    <h3 class="grey darken-3 white--text">1st Ability</h3>
                  </v-col>
                  <v-col cols="auto">
                    <span class="">{{ abilities[0] }}</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><h3 class="grey darken-3 white--text">
                      2nd Ability
                    </h3></v-col
                  >
                  <v-col cols="auto"
                    ><span class="">{{ abilities[1] }}</span></v-col
                  >
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><h3 class="grey darken-3 white--text">
                      3rd Ability
                    </h3></v-col
                  >
                  <v-col cols="auto"
                    ><span class="">{{ abilities[2] }}</span></v-col
                  >
                </v-row>
                <v-row>
                  <v-col cols="6"
                    ><h3 class="grey darken-3 white--text">
                      4th Ability
                    </h3></v-col
                  >
                  <v-col cols="auto"
                    ><span class="">{{ abilities[3] }}</span></v-col
                  >
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import ExcaliburUmbra from "@/components/global/ExcaliburUmbra.vue";
export default {
  props: ["id", "title", "disc", "url", "propers", "info", "abilities"],
  name: "WarFrames",
  data: () => ({
    show: false,
    hide: false,
    dialog: false,
  }),
  componants: {
    ExcaliburUmbra,
  },
  methods: {
    async deleteFrame() {
      await this.$store.dispatch("deleteFrame", this.id);
      this.$emit("deleteFrame", this.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
