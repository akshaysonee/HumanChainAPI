import IncidentModel from "../models/incident.model";
import { Incident } from "../interface/incident.interface";

// Get all incidents
export const getAllIncidents = async (): Promise<Incident[]> => {
  try {
    const incidents = await IncidentModel.find();
    return incidents;
  } catch (error: any) {
    throw new Error("Error fetching incidents: " + error.message);
  }
};

// Get incident by ID
export const getIncidentById = async (id: string): Promise<Incident | null> => {
  try {
    const incident = await IncidentModel.findById(id);
    return incident;
  } catch (error: any) {
    throw new Error("Error fetching incident: " + error.message);
  }
};

// Create a new incident
export const createIncident = async (incidentData: Incident) => {
  try {
    const newIncident = new IncidentModel(incidentData);
    await newIncident.save();
    return newIncident;  
  } catch (error: any) {
    throw new Error("Error creating incident: " + error.message);
  }
};


// Delete incident by ID
export const deleteIncident = async (id: string): Promise<boolean> => {
  try {
    const result = await IncidentModel.findByIdAndDelete(id);
    return result ? true : false;
  } catch (error: any) {
    throw new Error("Error deleting incident: " + error.message);
  }
};
