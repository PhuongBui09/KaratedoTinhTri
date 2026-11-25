import { model, Schema } from 'mongoose';

const tuitionSchema = new Schema({ name: { type: String, required: true }, price: { type: Number, required: true }, cycle: { type: String, default: 'monthly' }, description: String, features: [String], isFeatured: Boolean, isActive: { type: Boolean, default: true } }, { timestamps: true });
export const TuitionModel = model('TuitionPlan', tuitionSchema);
