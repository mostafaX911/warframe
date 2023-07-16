<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="550">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          class="ma-1"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          log in
        </v-btn>
      </template>

      <v-card elevation="10" class="pa-3">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="password"
              rules="required"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                :type="type"
                label="password"
                :append-icon="type === 'password' ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showpassword"
                required
              ></v-text-field>
            </validation-provider>
            <v-btn class="mr-4" type="submit" :disabled="invalid">
              log in
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async submit() {
      this.$refs.observer.validate();
      const response = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      if (response.status === 200) {
        console.log("loged in");
      } else {
        console.log("not loged in");
      }
    },
    clear() {
      this.email = "";
      this.password = "";

      this.$refs.observer.reset();
    },
    showpassword() {
      this.type = this.type === "text" ? "password" : "text";
    },
  },
  data() {
    return {
      name: "Mustafa",
      email: "maracap.x911@gmail.com",
      password: "321421213",
      dialog: false,
      type: "password",
      eye: true,
    };
  },
};
</script>
