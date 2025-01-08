document.addEventListener('DOMContentLoaded', () => {
    fetchDepartmentData();
    fetchProductivityData();
    fetchEmployeeStats();
});

async function fetchDepartmentData() {
    const response = await fetch('http://localhost:3000/api/department-performance');
    const data = await response.json();
    
    const ctx = document.getElementById('departmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.department),
            datasets: [{
                label: 'Performance Score',
                data: data.map(d => d.performance),
                backgroundColor: 'rgba(59, 130, 246, 0.5)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}