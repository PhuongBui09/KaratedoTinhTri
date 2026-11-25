import { model, Schema, type InferSchemaType } from 'mongoose';

const albumSchema = new Schema({ name: { type: String, required: true }, description: String, images: [{ url: String, publicId: String, alt: String }], createdBy: { type: Schema.Types.ObjectId, ref: 'User' } }, { timestamps: true });
export type AlbumDocument = InferSchemaType<typeof albumSchema>;
export const AlbumModel = model('Album', albumSchema);
