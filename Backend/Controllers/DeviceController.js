import Device from '../Models/DeviceModel';

// create a new device
export const createDevice = async (req, res) => {
    try {
        const device = new Device(req, body);
        await device.save();
        res.status(201).json(device);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all devices
export const getAllDevices = async (req, res) => {
    try {
        const devices = await Device.find();
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get device by id
export const getDeviceById = async (req, res) => {
    const { deviceId } = req.params;
    try {
        const device = await Device.findById(deviceId);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// update device
export const updateDevice = async (req, res) => {
    const { deviceId } = req.params;
    try {
        const updatedDevice = await Device.findByIdAndUpdate(deviceId, req.body, {
            new: true,
        });
        if (!updateDevice) {
            return res.status(404).json({ message: 'Device not found' });
        }
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete device
export const deleteDevice = async (req, res) => {
    const {deviceId} = req.params;
    try {
        const deletedDevice = await Device.findByIdAndDelete(deviceId);
        if(!deletedDevice){
            return res.status(404).json({message: 'Device not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}