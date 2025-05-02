import mongoose, { Schema, Document } from "mongoose";
import { Incident, Severity } from "../interface/incident.interface";

// Define Schema
const IncidentSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    severity: { 
      type: String, 
      enum: Object.values(Severity), 
      required: true
    },
    reported_at: { 
      type: Date, 
      default: Date.now 
    }
  },
  { timestamps: true }
);

// Define Model
const IncidentModel = mongoose.model<Incident & Document>("Incident", IncidentSchema);

export default IncidentModel;
