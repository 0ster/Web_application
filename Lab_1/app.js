const cars = [
    {
        color: "Red",
        brand: "Toyota",
        model: "Camry"
    },
    {
        color: "Blue",
        brand: "Honda",
        model: "Civic"
    },
    {
        color: "Green",
        brand: "Ford",
        model: "Focus"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    function toggleCarDetails(index) {
        const carDetailsDiv = document.getElementById(`carDetails${index}`);
        
        if (carDetailsDiv.style.display === 'none') {
            carDetailsDiv.style.display = 'block';
            carDetailsDiv.innerHTML = `
                <p>Color: ${cars[index].color}</p>
                <p>Brand: ${cars[index].brand}</p>
                <p>Model: ${cars[index].model}</p>
            `;
            document.getElementById(`toggleCar${index}`).textContent = 'Hide Car Properties';
        } else {
            carDetailsDiv.style.display = 'none';
            document.getElementById(`toggleCar${index}`).textContent = 'Show Car Properties';
        }
    }

    // Добавляем обработчики событий для каждой кнопки
    for (let i = 0; i < cars.length; i++) {
        document.getElementById(`toggleCar${i}`).addEventListener('click', function() {
            toggleCarDetails(i);
        });
    }
});
