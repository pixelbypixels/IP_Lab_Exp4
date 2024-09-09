// app.js

// Person Class Definition
class Person {
    constructor(name, email, mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    // Method to display basic details of the person
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`;
    }
}

// Student class inheriting from Person
class Student extends Person {
    constructor(name, email, mobile, rollNo) {
        super(name, email, mobile); // Calling the parent class constructor
        this.rollNo = rollNo;

        // Roll number validation with exception handling
        if (rollNo <= 0) {
            throw new Error("Invalid roll number. Roll number cannot be zero or negative.");
        }
    }

    // Overriding the getDetails method
    getDetails() {
        return `${super.getDetails()}, Roll No: ${this.rollNo}`;
    }
}

// Arrow function as a method in class (Example: Price Calculation)
const calculatePrice = (size) => {
    switch (size) {
        case 'small': return 15;
        case 'medium': return 20;
        case 'large': return 25;
        default: return 0;
    }
};

// Function to validate the form data
function validateForm() {
    const mobile = document.getElementById('mobile').value;
    if (mobile.length !== 9 || isNaN(mobile)) {
        alert("Please enter a valid 9-digit mobile number.");
        return false;
    }

    const message = document.getElementById('message').value;
    if (message.length > 50) {
        alert("Custom message exceeds the maximum length of 50 characters.");
        return false;
    }

    return true;
}

// Function to process the order and generate the receipt
function processOrder() {
    if (!validateForm()) {
        return false;
    }

    // Getting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const size = document.getElementById('size').value;
    const message = document.getElementById('message').value;

    try {
        // Creating a Person object (or a Student object for testing)
        const person = new Student(name, email, mobile, 1); // Sample rollNo: 1
        const details = person.getDetails();

        // Calculate Price based on T-shirt size
        const price = calculatePrice(size);

        // Get the current date using Date class
        const orderDate = new Date().toLocaleDateString();

        // Generate and display the receipt
        document.getElementById('receipt').innerHTML = `
            <h2>Order Receipt</h2>
            <p>${details}</p>
            <p>Size: ${size}</p>
            <p>Price: $${price}</p>
            <p>Custom Message: ${message}</p>
            <p>Date of Order: ${orderDate}</p>
            <p>Thank you for your order!</p>
        `;
    } catch (error) {
        alert(error.message); // Catching and displaying the exception
    }

    return false; // Preventing form from submitting to reload the page
}
