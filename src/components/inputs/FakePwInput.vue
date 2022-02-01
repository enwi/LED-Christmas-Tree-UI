<!-- Fake password input that shows a default text when value is set to null (= set, but unknown value) -->
<template>
    <input type="password"
           :disabled="disabled"
           @input="onInput($event)"
           @focus="onFocus($event.target)"
           :value="value_text" />
</template>

<script>
    export default {
        name: "FakePwInput",
        props: {
            disabled: { type: Boolean, default: false },
            default_value: { default: "********" },
            value: { type: String, default: null }
        },
        computed: {
            value_text: function () {
                return this.value === null ? this.default_value : this.value;
            },
        },
        methods: {
            onFocus(input) {
                if (this.value === null) {
                    input.select();
                }
            },
            onInput(event) {
                if (this.value !== null) {
                    this.$emit('input', event.target.value);
                }
                else if (event.data !== null) {
                    // Replace dummy value with typed input
                    this.$emit('input', event.data);
                } else {
                    // Other kind of input (like backspace), clear value
                    this.$emit('input', '');
                }
            }
        }
    };
</script>

<style scoped>
    input:disabled {
        opacity: 0.25;
    }

    input {
        padding: 8px;
        font-size: 0.9rem;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid gray;
        border-radius: 5px;
        -webkit-appearance: none;
    }

    input {
        -webkit-appearance: menulist;
    }
</style>