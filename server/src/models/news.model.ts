import { model, Schema, type InferSchemaType } from 'mongoose';

const newsSchema = new Schema({ title: { type: String, required: true, trim: true }, slug: { type: String, required: true, unique: true, lowercase: true, trim: true }, excerpt: { type: String, required: true }, content: { type: String, required: true }, coverImage: String, category: { type: Schema.Types.ObjectId, ref: 'NewsCategory' }, status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' }, publishedAt: Date, author: { type: Schema.Types.ObjectId, ref: 'User' } }, { timestamps: true });
newsSchema.index({ slug: 1 });
newsSchema.index({ status: 1, publishedAt: -1 });
export type NewsDocument = InferSchemaType<typeof newsSchema>;
export const NewsModel = model('News', newsSchema);
