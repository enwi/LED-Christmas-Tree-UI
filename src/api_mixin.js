import axios from "axios";

export const api_mixin = {
	data: function () {
		return {
			status: {
				uptime: 0,
				lights: {
					enabled: false,
					brightness: 0,
					speed: 0,
					effect: "----"
				},
				mqtt: {
					status: "disabled", //Can be either disabled or connected or disconnected
				},
				network: {
					wifi_client: {
						status: "disabled", //Can be either disabled or connected or disconnected
						ip: "111.222.333.444",
						netmask: "255.255.255.0",
						dns: "1.3.4.5"
					},
					wifi_ap: {
						"status": "disabled", //Can be either disabled or enabled
					},
					mac: "00:DE:AD:BE:EF:00",
				},
			},
			config: {

				mqtt: {
					enabled: false,
					server: "111.222.333.444",
					port: 1883,
					id: "ESP8266-LedChristmasTree",
					user: "xxx",
					password: "xxx",
					// "topic_in": "/ESP00/cmd",
					// "topic_out": "/ESP00/msg",
				},
				wifi: {
					client_enabled: false,
					client_dhcp_enabled: true,
					client_ssid: "YourWifi-AP",
					client_password: "inputyourown",
					client_ip: "111.222.333.444",
					client_mask: "255.255.255.0",
					client_gateway: "111.222.333.555",
					client_dns: "111.222.333.555",
					client_hostname: "LedChristmasTree",
					ap_enabled: true,
					ap_ssid: "LedChristmasTree",
					ap_password: "",
					ap_ip: "192.168.4.1",
					ap_network: "192.168.4.0",
					ap_mask: "255.255.255.0"
				},
			}
		}
	},
	mounted() {
		this.reload_status();
		this.$root.$on('reload_btn', this.reloadevent_handler)
	},
	unmounted() {
		this.$root.$off('reload_btn', this.reloadevent_handler)
	},
	methods: {
		reloadevent_handler() {
			this.reload_config();
			this.reload_status();
		},
		reload_config() {
			axios.get("/api/config").then(response => {
				this.$set(this,"config",response.data)
			}).catch(error => {
				console.error(error)
				// this.$toasts.push({ type: 'error', message: 'A network error occured while fetching status: '+error, duration:10000 })
			});
		},
		reload_status() {
			axios.get("/api/status").then(response => {
				this.$set(this,"status",response.data)
			}).catch(error => {
				console.error(error)
				// this.$toasts.push({ type: 'error', message: 'A network error occured while fetching status: '+error, duration:10000 })
			});
		},

		api_post_set_leds() {
			axios.post("/api/set_leds", {
				enabled: this.status.lights.enabled,
				brightness: this.status.lights.brightness,
				speed: this.status.lights.speed,
				// effect: this.status.lights.effect
			}).then(response => {
				if(response.data === "OK") {
					console.info("Updated light config")
				}
			}).catch(error => {
				console.error(error)
				// this.$toasts.push({ type: 'error', message: 'A network error occured while fetching status: '+error, duration:10000 })
			});
		},
	}
}