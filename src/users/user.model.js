import { model, Schema} from "mongoose";

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [25, 'Cant be overcome 25 characters ']
    },
    surname: {
        type: String,
        required: [true, 'Surname is required'],
        maxlength: [25, 'Cant be overcome 25 characters ']
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    profilePicture: {
        type: String,
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true, //Agrega el createAt y updateAt
        versionKey: false, // No agrega el campo __v
    }
);

UserSchema.methods.toJson = function() {
    const { __v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default model('User', UserSchema);