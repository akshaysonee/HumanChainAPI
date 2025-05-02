import { Router } from "express";
import { createIncident,getAllIncidents, getIncidentById, deleteIncident} from "../controllers/incident.controller";

const router = Router();
// get All incidents
router.get("/incidents", getAllIncidents);
// create
 router.post("/incidents", createIncident);
// // get by id
router.get("/incidents/:id", getIncidentById);
// //soft delete
 router.delete("/incidents/:id", deleteIncident);

export default router;
