const mongoose = require('mongoose');
const HoldingSchema = require('../schema/HoldingSchemas');

const HoldingModel = mongoose.model('Holding', HoldingSchema);

module.exports = HoldingModel;
