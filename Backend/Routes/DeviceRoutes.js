
import express from 'express';
import {
  createDevice,
  getAllDevices,
  getDeviceById,
  updateDevice,
  deleteDevice,
} from '../Controllers/DeviceController'; 

const router = express.Router();

router.post('/devices', createDevice); // Create a new device
router.get('/devices', getAllDevices); // Get all devices
router.get('/devices/:deviceId', getDeviceById); // Get a specific device by ID
router.put('/devices/:deviceId', updateDevice); // Update a device by ID
router.delete('/devices/:deviceId', deleteDevice); // Delete a device by ID

export default router;