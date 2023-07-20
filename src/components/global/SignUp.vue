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
          Sign Up
        </v-btn>
      </template>

      <v-card elevation="10" class="pa-3">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Name"
                value="mostaf"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 11,
                regex: '^01[0125][0-9]{8}$',
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="11"
                :error-messages="errors"
                label="Phone Number"
                required
              ></v-text-field>
            </validation-provider>
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
            <validation-provider v-slot="{ errors }" name="age">
              <v-text-field
                v-model="age"
                :error-messages="errors"
                label="age"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" name="gender">
              <v-select
                v-model="gender"
                :error-messages="errors"
                label="gender"
                :items="genders"
                required
              ></v-select>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              Sign Up
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
      await this.$store.dispatch("signup", {
        name: this.name,
        phoneNumber: this.phoneNumber,
        email: this.email,
        password: this.password,
        age: this.age,
        gender: this.gender,
      });
      this.dialog = false;
      setTimeout(() => {
        this.$eventHub.$emit("usercreated");
      }, 1000);

      console.log(this.$eventHub);
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.age = "";
      this.password = "";
      this.select = null;

      this.$refs.observer.reset();
    },
    showpassword() {
      this.type = this.type === "text" ? "password" : "text";
    },
  },
  data() {
    return {
      name: "Mustafa",
      phoneNumber: "01113429944",
      email: "maracap.x911@gmail.com",
      genders: ["male", "female"],
      gender: "",
      age: 18,
      password: "321421213",
      checkbox: null,
      dialog: false,
      type: "password",
      eye: true,
    };
  },
};
</script>
