import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        accountUserId: {
            type: Number,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema, "users");
export default UserModel;