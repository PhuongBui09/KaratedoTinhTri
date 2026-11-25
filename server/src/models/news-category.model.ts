import { model, Schema } from 'mongoose';

const newsCategorySchema = new Schema({ name: { type: String, required: true }, slug: { type: String, required: true, unique: true }, description: String, isActive: { type: Boolean, default: true } }, { timestamps: true });
export const NewsCategoryModel = model('NewsCategory', newsCategorySchema);
