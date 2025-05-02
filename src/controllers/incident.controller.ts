import { Request, Response } from "express";
import * as incidentHelper from "../helper/incident.helper";
import { Incident } from "../interface/incident.interface";

// Get all incidents
export const getAllIncidents = async (req: Request, res: Response) => {
  try {
    const incidents = await incidentHelper.getAllIncidents();
    return res.status(200).json(incidents);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving incidents" });
  }
};

// Get incident by ID
export const getIncidentById = async (req: Request, res: Response) => {
  try {
    const incident = await incidentHelper.getIncidentById(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    return res.status(200).json(incident);
  } catch (error: any) {
    return res.status(500).json(`Error fetching incident`);
  }
};

// Create a new incident
export const createIncident = async (req: Request, res: Response) => {
    const { title, description, severity }: { title: string, description: string, severity: string } = req.body;
    if (!title || !description || !severity) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const validSeverities = ["Low", "Medium", "High"];
    if (!validSeverities.includes(severity)) {
      return res.status(400).json({ message: "Please enter a correct severity level (Low, Medium, High)" });
    }
  
    try {
      const newIncident: any = { title, description, severity };
      const incident = await incidentHelper.createIncident(newIncident);
      return res.status(201).json(incident);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: "Error creating incident", error: error.message });
    }
  };
  

// Delete an incident
export const deleteIncident = async (req: Request, res: Response) => {
  try {
    const isDeleted = await incidentHelper.deleteIncident(req.params.id);
    if (!isDeleted) {
      return res.status(404).json({ message: "Incident not found" });
    }
    return res.status(200).json("Incidents deleted Successfully");
  } catch (error) {
    return res.status(500).json({ message: "Error deleting incident" });
  }
};
