let totalSteps = 0;

function updateSteps() {
    const stepsInput = document.getElementById('steps');
    const stepsValue = parseInt(stepsInput.value);

    if (!isNaN(stepsValue)) {
        totalSteps += stepsValue;
        document.getElementById('total-steps').innerText = totalSteps;
        stepsInput.value = '';
    }

    checkGoals();
}

function checkGoals() {
    const goalsContainer = document.getElementById('goals');
    goalsContainer.innerHTML = '';

    const goals = [
        { period: 'Дневные', type: 'Реальные', target: 10000 },
        { period: 'Недельные', type: 'Книжные', target: 70000 },
        { period: 'Месячные', type: 'Мифические', target: 300000 },
        { period: '3-месячные', type: 'Космические', target: 900000 },
        { period: 'Годовые', type: 'Природные', target: 3650000 }
    ];

    goals.forEach(goal => {
        const progress = Math.min(100, (totalSteps / goal.target) * 100);
        const goalElement = document.createElement('div');
        goalElement.className = 'goal';
        goalElement.innerHTML = `
            <strong>${goal.period} (${goal.type}):</strong> 
            ${progress.toFixed(2)}% (${totalSteps}/${goal.target})
            <progress value="${progress}" max="100"></progress>
        `;
        goalsContainer.appendChild(goalElement);
    });
}
