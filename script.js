function check() {
    var height = document.getElementById('meter').value;
    var weight = document.getElementById('kg').value;
    var bmi = (weight / height ** 2).toFixed(1);
    document.getElementById('bmiValue').textContent = bmi;
    var bmiCategory = '';
    if (bmi < 18.5)
        bmiCategory = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9)
        bmiCategory = 'Normal';
    else if (bmi >= 25.0 && bmi <= 29.9)
        bmiCategory = 'Overweight';
    else if (bmi >= 30.0)
        bmiCategory = 'Obese';

    document.getElementById('bmiCategory').textContent = bmiCategory;
}