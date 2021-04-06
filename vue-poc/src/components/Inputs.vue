<script>
const InputField = {
    props: {
        type: String,
        value: String,
        placeholder: String
    },

    render() {
        return (
            <div>
                <input
                    type={this.type}
                    value={this.value}
                    placeholder={this.placeholder}
                />
            </div>
        );
    }
};

const InputButton = {
    props: {
        text: String
    },

    render() {
        return (
            <div>
                <button class="any">{this.text}</button>
            </div>
        )
    }
};

export { InputField, InputButton };
export default InputField;
</script>