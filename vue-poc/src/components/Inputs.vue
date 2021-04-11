<script>
const InputField = {
    props: {
        type: String,
        value: String,
        placeholder: String
    },
    methods: {
        onChange(event) {
            this.$emit('changed', event.target.value);
        }
    },

    render() {
        return (
            <div>
                <input
                    type={this.type}
                    value={this.value}
                    placeholder={this.placeholder}
                    v-on:change={this.onChange}
                />
            </div>
        );
    }
};

const InputButton = {
    props: {
        text: String
    },
    methods: {
        onClick() {
            this.$emit('clicked');
        }
    },

    render() {
        return (
            <div>
                <button v-on:click={this.onClick} class="any">
                    {this.text}
                </button>
            </div>
        )
    }
};

export { InputField, InputButton };
export default InputField;
</script>