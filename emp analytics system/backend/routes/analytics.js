const express = require('express');
const router = express.Router();
const employeeData = require('../data/employees.json');

router.get('/department-performance', (req, res) => {
    const performance = calculateDepartmentPerformance(employeeData);
    res.json(performance);
});

router.get('/productivity-trends', (req, res) => {
    const trends = calculateProductivityTrends(employeeData);
    res.json(trends);
});

module.exports = router;