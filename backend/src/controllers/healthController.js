const mongoose = require('mongoose');

const getHealth = (_req, res) => {
  const readyStateMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbStateCode = mongoose.connection.readyState;

  res.status(200).json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      state: readyStateMap[dbStateCode] || 'unknown',
      readyState: dbStateCode,
    },
  });
};

module.exports = {
  getHealth,
};
