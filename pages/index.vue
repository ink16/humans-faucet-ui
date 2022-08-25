
<template>
  <div class="w-100">

    <v-stepper v-model="step" alt-labels class="stepper w-100">

      <!--  -->
      <v-stepper-step
        class="stepiconfont"
        step="1"
        :complete="step > 1"
        editable
      >
        Instructions
      </v-stepper-step>

      <v-stepper-content
        :step="1"
      >
        <div class="txtdts text-center">
          <p>You can acquire <b>test</b> HEART tokens through this faucet.</p>
        </div>
        <v-btn
          @click="step++"
          depressed
          color="primary"
          class="d-block mx-auto"
        >Start
      </v-btn>
      </v-stepper-content>

      <!--  -->

      <v-stepper-step
        class="stepiconfont"
        step="2"
        :complete="step > 2"
        editable
      >
        Add your humans <b>testnet</b> Address
        <v-tooltip
        top
        close-delay="2000"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              small
              >
              mdi-information-outline
            </v-icon>
          </template>
          <span>Please enter your Humans testnet wallet address which we'll use to transfer your test tokens.<br> To show the wallet address, follow the <a class="font-weight-bold" href="https://github.com/cheqd/cheqd-node/blob/main/docs/cheqd-cli/cheqd-cli-accounts.md" target="_blank">cheqd CLI guide on managing accounts (cheqd-noded keys list).</a><br> It should begin with "cheqd1".</span>
        </v-tooltip>
      </v-stepper-step>

      <v-stepper-content
        :step="2"
      >
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-col
            cols="12"
          >
          <v-card
            class="mb-12 col-auto"
            color="lighten-1"

          >
            <v-text-field
              v-model="address"
              label="humans wallet Address"
              :hint="`Example: ${DEFAULT_TESTING_ADDRESS}`"
              required
              class="col-12"
              :rules="address_rules"
            />
          </v-card>
          <v-btn
            :disabled="!valid"
            @click="validate"
            depressed
            color="primary"
            class="d-block mx-auto"
          >Continue
        </v-btn>
        </v-col>
        </v-form>
      </v-stepper-content>

      <v-divider></v-divider>

      <v-stepper-step
        step="3"
        :complete="step > 3"
        class="stepiconfont"
      >
        Verification Challenge
        <v-tooltip
        top
        close-delay="2000"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              small
              >
              mdi-information-outline
            </v-icon>
          </template>
          <span>Complete the reCaptcha.<br> Once you have completed this we'll send you a notification with confirmation your tokens have been sent.</span>
        </v-tooltip>
      </v-stepper-step>

      <v-stepper-content
        :step="3"
      >
        <v-form
          @submit.prevent="handle_submit"
        >
          <recaptcha />
          <v-btn
            type="submit"
            depressed
            color="primary"
            class="d-block mx-auto"
            :loading="loading"
          >Continue
          </v-btn>
        </v-form>
      </v-stepper-content>
    </v-stepper>
    <v-alert
      icon="mdi-shield-lock-outline"
      prominent
      dismissible
      text
      type="success"
      v-model="success"
      transition="scale-transition"
      class="mt-3"
      outlined
    >
      <b>Done! Your requests tokens should have arrived at your provided address ({{ CHEQD_CURRENT_AMOUNT_GIVEN }} {{ CHEQD_MINIMAL_DENOM }}).</b>
    </v-alert>
    <v-alert
      icon="mdi-shield-lock-outline"
      prominent
      dismissible
      text
      type="error"
      v-model="error"
      transition="scale-transition"
      class="mt-3"
      outlined
    >
      <b>Server is unreachable at the moment. Kindly, try again later.</b>
    </v-alert>
    <v-alert
      icon="mdi-shield-lock-outline"
      prominent
      dismissible
      text
      type="warning"
      v-model="error_non_existing_address"
      transition="scale-transition"
      class="mt-3"
      outlined
    >
      <b>Faucet is busy or you might reached the 100 Hearth per account limit, please try again later!</b>
    </v-alert>
    <v-alert
      icon="mdi-shield-lock-outline"
      prominent
      dismissible
      text
      type="warning"
      v-model="error_recaptcha"
      transition="scale-transition"
      class="mt-3"
      outlined
    >
      <b>You haven't passed the reCaptcha Verification challenge yet.</b>
    </v-alert>
  </div>
</template>

<script>

import { CHEQD_CURRENT_AMOUNT_GIVEN, CHEQD_FAUCET_SERVER, CHEQD_MINIMAL_DENOM, DEFAULT_TESTING_ADDRESS } from '../constants/constants'

export default {
  data: () => {
    return {
      step: 1,
      address: null,
      valid: false,
      loading: false,
      success: false,
      error: false,
      error_non_existing_address: false,
      error_recaptcha: false,
      address_rules: [
        value => !!value||`Required.\n Example: ${DEFAULT_TESTING_ADDRESS}`,
        value => /^(human)1[a-z0-9]{38}$/.test(value)||'Invalid humans address format.'
      ],
      CHEQD_MINIMAL_DENOM,
      CHEQD_CURRENT_AMOUNT_GIVEN,
      DEFAULT_TESTING_ADDRESS
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
      return this.valid
              ? this.step++
              : false
    },

    async handle_auto_dismiss (prop, interval=4000) {
      return setTimeout(() => {return this[prop] = !this[prop]}, interval)
    },

    async handle_submit () {

      this.loading = !this.loading

      try {
        await this.$recaptcha.getResponse()
        await this.$recaptcha.reset()
      } catch (error) {
        this.loading = !this.loading
        this.error_recaptcha = true
        return this.handle_auto_dismiss('error_recaptcha')
      }

      const status = await this.handle_fetch()

      this.loading = !this.loading
      console.log("Status of error:",status)
      if(!status) return this.error_non_existing_address = true

      if(status.data === 'ok'){
        this.success = true
        return this.handle_auto_dismiss('success')
      }

      this.error = true
      return this.handle_auto_dismiss('error')
    },

    async handle_fetch () {
      try {
        const response = await this.$axios.post(
          `${CHEQD_FAUCET_SERVER}`, //removed '/credit'
          {
            coins: [CHEQD_CURRENT_AMOUNT_GIVEN+CHEQD_MINIMAL_DENOM],
            address: this.address || DEFAULT_TESTING_ADDRESS
          }
        )
        return response
      } catch (error) {
        return false
      }
    }
  }
}

</script>
<style scoped>

  .w-100 {
    width:100%;
  }
  div.g-recaptcha {
    margin: 0 auto 20px auto;
    width: 304px;
  }
  .stepper {
    display: block;
    background: white;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05) !important;
    border-radius:8px;
    width:100%;
  }
  .txtdts {
    text-align: center;
  }
  .txtdts h1 {
    font-style: normal;
    font-weight: 300;
    text-decoration: none;
    /* color: #003b5c; */
    font-size: 62px;
    letter-spacing: 0px;
    text-transform: none;
  }
  .v-tooltip__content {
    pointer-events: initial;
  }
  ::v-deep .stepiconfont .v-stepper__step__step {
    font-size: 1.25rem;
    height: 35px;
    min-width: 35px;
    width: 28px;
  }
  ::v-deep .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: block !important;
  }
  ::v-deep .statusbadge .v-badge__badge {
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
  .welcometitle {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  @media only screen and (max-width: 992px) {

    .txtdts h1 {
      font-size: 42px;
    }
  }
  @media only screen and (max-width: 756px) {
    .txtdts h1 {
      font-size: 36px;
    }
  }
  @media only screen and (max-width: 576px) {

    .txtdts h1 {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 500px) {
    .txtdts h1 {
      font-size: 26px;
    }
  }
</style>
