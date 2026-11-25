import { model, Schema, type InferSchemaType } from 'mongoose';

const userSchema = new Schema({ name: { type: String, required: true, trim: true }, email: { type: String, required: true, unique: true, lowercase: true, trim: true }, passwordHash: { type: String, required: true }, role: { type: String, enum: ['super_admin', 'admin', 'coach'], default: 'coach' }, isActive: { type: Boolean, default: true } }, { timestamps: true });
export type UserDocument = InferSchemaType<typeof userSchema>;
export const UserModel = model('User', userSchema);
