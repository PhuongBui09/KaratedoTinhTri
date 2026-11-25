import { model, Schema, type InferSchemaType } from 'mongoose';

const studentSchema = new Schema({ fullName: { type: String, required: true, trim: true }, dateOfBirth: Date, gender: { type: String, enum: ['male', 'female', 'other'] }, parentPhone: { type: String, required: true }, address: String, branch: { type: Schema.Types.ObjectId, ref: 'Branch', required: true }, currentBelt: { type: String, default: 'white' }, enrollmentDate: { type: Date, default: Date.now }, status: { type: String, enum: ['active', 'paused', 'graduated', 'inactive'], default: 'active' } }, { timestamps: true });
export type StudentDocument = InferSchemaType<typeof studentSchema>;
export const StudentModel = model('Student', studentSchema);
