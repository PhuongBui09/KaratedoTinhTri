import { model, Schema, type InferSchemaType } from 'mongoose';

const branchSchema = new Schema({ name: { type: String, required: true, trim: true }, address: { type: String, required: true }, manager: { type: String, required: true }, phone: { type: String, required: true }, status: { type: String, enum: ['active', 'inactive'], default: 'active' } }, { timestamps: true });
export type BranchDocument = InferSchemaType<typeof branchSchema>;
export const BranchModel = model('Branch', branchSchema);
