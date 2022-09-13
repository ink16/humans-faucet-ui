<template>
  <v-app class="bg-secondary">
    <v-container class="mt-4">
      <v-row>
        <div
          id="header"
          class="d-flex justify-space-between align-center col-11 col-lg-12 col-xl-10 w-100 mx-auto"
        >
          <div class="statusheaderleft">
            <a href="/">
              <img
                class="mainimglogo"
                src="../assets/img/humans-logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <!--<h2 class="devnetheader">DEVNET</h2> -->
          <div class="statusheader">
            <div class="desktopstatusdiv">
              <v-select
                class="select_chain mr-3"
                v-model="selected"
                :items="items"
                outlined
                label="Chain ID"
              ></v-select>
              <div class="faucetcompstatus">
                <h4 style="font-weight: 300">
                  Faucet Status:
                  <span class="statustextcol">
                    <span style="margin-right: 3px">{{ faucet_status }}</span>
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" small color="green">
                          mdi-circle
                        </v-icon>
                      </template>
                      <span>{{ faucet_status }}</span>
                    </v-tooltip>
                  </span>
                </h4>
              </div>
            </div>
            <!--  -->
            <div class="mobilestatusdiv">
              <template>
                <div class="text-center">
                  <v-dialog v-model="dialog" width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon color="black" v-bind="attrs" v-on="on">
                        <v-icon>mdi-information-outline</v-icon>
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="text-h5 lighten-2"> </v-card-title>

                      <v-card-text class="mt-2">
                        <div class="faucetcompstatus">
                          <v-select
                            class="select_chain mr-3"
                            v-model="selected"
                            :items="items"
                            outlined
                            label="Chain ID"
                          ></v-select>
                          <h4 style="font-weight: 300">
                            Faucet Status:
                            <span class="statustextcol">
                              <span style="margin-right: 3px">{{
                                faucet_status
                              }}</span>
                              <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-icon
                                    v-bind="attrs"
                                    v-on="on"
                                    small
                                    color="green"
                                  >
                                    mdi-circle
                                  </v-icon>
                                </template>
                                <span>{{ faucet_status }}</span>
                              </v-tooltip>
                            </span>
                          </h4>
                        </div>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                          OK
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </template>
            </div>
            <!--  -->
          </div>
        </div>
      </v-row>
    </v-container>
    <v-container class="mt-12 mb-12">
      <v-row>
        <div
          class="d-flex justify-center align-center col-11 col-lg-12 col-xl-10 w-100 mx-auto px-0"
        >
          <Nuxt />
        </div>
      </v-row>
    </v-container>
    <v-container class="mt-auto mb-4" relative>
      <v-row>
        <div
          id="footer"
          class="d-flex flex-column align-center col-11 col-lg-12 col-xl-10 w-100 mx-auto pt-8"
        >
          <div class="w-100 social-links justify-center d-flex">
            <a
              href="https://discord.gg/humansdotai"
              class="social-links__icon mr-5"
              target="_blank"
              ><span class="social-links__icon"
                ><svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  aria-labelledby="telegram1"
                  role="img"
                >
                  <title id="telegram1">Follow us on Discord</title>
                  <g id="telegram1_layer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                      />
                    </svg>
                  </g></svg></span
            ></a>
            <a
              href="https://twitter.com/humansdotai"
              class="social-links__icon mr-5"
              target="_blank"
              ><span class="social-links__icon"
                ><svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-labelledby="twitter2"
                  role="img"
                >
                  <title id="twitter2">Follow us on Twitter</title>
                  <g id="twitter2_layer">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </g></svg></span
            ></a>
            <a
              href="https://www.facebook.com/humansdotai"
              class="social-links__icon mr-5"
              target="_blank"
              ><span class="social-links__icon"
                ><svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  aria-labelledby="linkedin-in3"
                  role="img"
                >
                  <title id="linkedin-in3">Follow us on Facebook</title>
                  <g id="linkedin-in3_layer">
                    <<svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      />
                    </svg>
                  </g></svg></span
            ></a>
            <a
              href="https://github.com/humansdotai"
              class="social-links__icon"
              target="_blank"
              ><span class="social-links__icon"
                ><svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 480 512"
                  aria-labelledby="github-alt4"
                  role="img"
                >
                  <title id="github-alt4">Follow us on GitHub</title>
                  <g id="github-alt4_layer">
                    <path
                      d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                    ></path>
                  </g></svg></span
            ></a>
          </div>
          <div>
            <p style="text-align: center; font-size: 18px">
              &copy; {{ new Date().getFullYear() }} Humans.ai | Heart driven AI
            </p>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { CHEQD_FAUCET_SERVER } from "../constants/constants";

export default {
  name: "DefaultLayout",
  data() {
    return {
      fixed: false,
      title: "humans Devnet faucet",
      faucet_status: "",
      faucet_status_color: "green",
      items: ["devnet"],
      selected: "devnet",
      dialog: false,
    };
  },

  async mounted() {
    await this.handle_interval(this.handle_faucet_status(), 30000);
  },
  methods: {
    async handle_faucet_status() {
      try {
        const status = await this.$axios.get(`${CHEQD_FAUCET_SERVER}`);
        console.log("Faucet status is", status);
        if (status.status === 200) {
          this.faucet_status_color = "green";
          this.faucet_status = "Operational";
          return;
        }
      } catch (error) {
        this.faucet_status_color = "red";
        this.faucet_status = "Down";
        return;
      }

      this.faucet_status_color = "red";
      this.faucet_status = "Down";
      return;
    },

    async handle_interval(promise, interval) {
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, interval));
        await promise;
      }
    },
  },
};
</script>
<style scoped>
.w-100 {
  width: 100%;
}

.maincontainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.statustextcol {
  display: inline-flex;
  align-items: center;
}
.statustextcol i {
  margin-top: -1px;
}
/*  */
#header {
  /* position: sticky;
    top:0; */
  display: block;
  background: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 100;
  border-radius: 8px;
}
#footer {
  background: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 100;
  border-radius: 8px;
}
.flex_contheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.statusheader {
  padding-right: 15px;
  width: 250px;
}
.statusheaderleft {
  width: 250px;
}
.mainimglogo {
  width: 320px;
  display: block;
  padding-left: 15px;
}
/*  */
.pagefooter {
  background: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  z-index: 100;
  border-radius: 8px;
}
.social-links__icon {
  background-color: transparent;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
.social-links svg {
  fill: black;
  width: 20px;
  height: 20px;
  transition: fill 0.05s ease-in-out;
}
.social-links svg:hover {
  fill: #1534ef;
}
.sociallinks {
  font-weight: 300;
  text-decoration: underline;
  font-family: Nunito, sans-serif;
  font-style: normal;
  color: #00c6ab;
}
.select_chain {
  max-width: 225px;
}
.faucetcompstatus {
  margin-top: -15px;
}
.mobilestatusdiv {
  display: none;
}
@media only screen and (max-width: 992px) {
  .social-links svg {
    width: 30px;
    height: 30px;
  }
  .mainimglogo {
    width: 240px;
    margin: 0 auto;
  }
  .statusheader {
    width: auto;
  }
  .statusheaderleft {
    width: auto;
  }
  .desktopstatusdiv {
    display: none;
  }
  .mobilestatusdiv {
    display: block;
    width: 100px;
  }
}
@media only screen and (max-width: 756px) {
  .mainimglogo {
    width: 240px;
    margin: 0 auto;
  }
  .devnetheader {
    font-size: 30px;
  }
  .mobilestatusdiv {
    display: block;
  }
}
@media only screen and (max-width: 576px) {
  .mobilestatusdiv {
    display: block;
    width: 60px;
  }
  .mainimglogo {
    width: 240px;
    margin: 0;
  }
  .devnetheader {
    font-size: 24px;
  }
  .bgdarkopacity {
    width: 100%;
    min-width: auto;
  }
  .social-links__icon {
    margin: 0;
  }
}
@media only screen and (max-width: 480px) {
  .social-links__icon {
    padding: 0.7rem 0.4rem 0.2rem 0.4rem;
  }
  .mobilestatusdiv {
    display: block;
  }
}
footer.row {
  background-color: "#E5E6E6" !important;
}
.theme--light.v-sheet {
  background-color: "#E5E6E6" !important;
}

.theme--light.v-application {
  background: url("../assets/img/background-faucet.png");
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
