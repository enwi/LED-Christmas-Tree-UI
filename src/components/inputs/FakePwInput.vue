<template>
    <input type="password"
           :disabled="disabled"
           @input="$emit('input', $event.target.value)"
           :value="value" />
</template>

<script>
    export default {
        name: "FakePwInput",
        props: {
            disabled: { type: Boolean, default: false },
            has_value: { type: Boolean, default: false },
            default_value: { default: "not set" },
            v
        },
        computed: {
            value: {
                get: function () {
                    return this.has_value ? v : default_value;
                },
                set: function (newValue) {
                    this.v = newValue;
                    this.has_value = true;
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