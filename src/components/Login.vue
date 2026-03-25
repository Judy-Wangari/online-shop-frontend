<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();

const { login, loading, error } = useAuth()

const rules = {
required: value => !!value || 'Required.',
min: v => v.length >= 8 || 'Min 8 characters',
emailMatch: () => (`The email and password you entered don't match`),
}

const username = ref(null)
const password = ref(null)
const showPassword = ref(false)

async function handleLogin() {
  
  if (!username.value || !password.value) {
    console.error('Email and password are required')
    return
  }
  
  try {
    await login({
      email: username.value,
      password: password.value
    })
   
    // Redirect after successful login
    router.push('/').then(() => {
        router.go(0); // Reloads the current route
    });
  } catch (err) {
    // Error is already handled by the auth service
    console.error('Login failed', err)
  }
}
</script>
<template>
  <v-container fluid fill-height class="login-background">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="10" class="pa-6 rounded-lg">
          <v-form @submit.prevent="handleLogin" ref="form">
            <div class="text-center mb-6">
              <h1 class="text-h4 font-weight-bold teal--text text--darken-2">
                Welcome Back
              </h1>
              <p class="text-subtitle-1 mt-2">
                Log in to Shoply
              </p>
            </div>
            <v-text-field v-model="username" label="Email" prepend-inner-icon="mdi-email" required outlined dense ></v-text-field>
            <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" required outlined dense ></v-text-field>
            <div class="d-flex justify-space-between align-center mb-2">
              <a href="#" class="teal--text text--darken-2 text-body-2" >Forgot password?</a >
            </div>
            <v-btn block color="primary" dark class="mt-4" large type="submit"> Log In </v-btn>
            <div class="text-center mt-6">
              <p>
                Don't have an account?
                <router-link to="/signup" class="teal--text text--darken-2 font-weight-medium" >Sign Up</router-link>
              </p>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
