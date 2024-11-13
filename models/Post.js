const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 40,
    validate: {
      validator: function (valid) {
        return /^[a-zA-Z\s]*$/.test(valid);
      },
      message: (props) =>
        `${props.value} is not a valid title. Only letters and spaces are allowed, with a maximum length of 40 characters.`,
    },
  },
  body: {
    type: String,
    required: true,
  },
});

PostSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=title%>" });

module.exports = model("Post", PostSchema);
