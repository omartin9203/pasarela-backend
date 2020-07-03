import * as mongoose from 'mongoose';
import { DEVICE_MODEL_NAME } from '../../../utils/model-names';

const Schema = mongoose.Schema;

export const DeviceSchema = new Schema({
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  uid: {type: Number, required: true, unique: true},
  brand: {type: String, required: true},
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
}, { timestamps: true });

export const DeviceFeature = {
  name: DEVICE_MODEL_NAME,
  schema: DeviceSchema,
};
