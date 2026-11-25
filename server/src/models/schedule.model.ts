import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema({ dayOfWeek: { type: String, required: true }, startTime: { type: String, required: true }, endTime: { type: String, required: true }, level: { type: String, required: true }, branch: { type: Schema.Types.ObjectId, ref: 'Branch', required: true }, coach: { type: Schema.Types.ObjectId, ref: 'Coach', required: true }, isActive: { type: Boolean, default: true } }, { timestamps: true });
export const ScheduleModel = model('Schedule', scheduleSchema);
