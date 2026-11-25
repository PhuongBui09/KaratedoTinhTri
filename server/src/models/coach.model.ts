import { model, Schema, type InferSchemaType } from 'mongoose';

const coachSchema = new Schema({ name: { type: String, required: true }, role: { type: String, required: true }, bio: String, image: String, specialties: [String], yearsOfExperience: { type: Number, default: 0 }, isActive: { type: Boolean, default: true } }, { timestamps: true });
export type CoachDocument = InferSchemaType<typeof coachSchema>;
export const CoachModel = model('Coach', coachSchema);
