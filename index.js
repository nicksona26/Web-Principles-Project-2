document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        // remove error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(element => {
            element.remove();
        });

        // remove error highlights
        const errorFields = document.querySelectorAll('.error-field');
        errorFields.forEach(element => {
            element.classList.remove('error-field');
        });

        const errors = [];

        // check if all inputs are filled
        const fields = ['studentID', 'firstName', 'lastName', 'projectTitle', 'email', 'phoneNumber', 'timeSlot'];
        fields.forEach(fieldName => {
            const value = document.getElementById(fieldName).value.trim();
            if (value === '') {
                errors.push(fieldName + ' is required.');
                const errorContainer = document.createElement('div');
                errorContainer.classList.add('error-message');
                errorContainer.style.color = 'red';
                errorContainer.style.marginBottom = '5px';
                errorContainer.textContent = fieldName + ' is required.';
                document.getElementById(fieldName).parentNode.insertBefore(errorContainer, document.getElementById(fieldName));
                document.getElementById(fieldName).classList.add('error-field'); 
            }
        });

        // FORMAT CHECKS

        // studentID is 8 digits
        const studentID = document.getElementById('studentID').value;
        if (studentID !== '' && !/^\d{8}$/.test(studentID)) {
            errors.push("Student ID must be 8 digits.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "Student ID must be 8 digits.";
            document.getElementById('studentID').parentNode.insertBefore(errorContainer, document.getElementById('studentID'));
            document.getElementById('studentID').classList.add('error-field'); 
        }

        // first name, last name, project name alpha characters only
        const firstName = document.getElementById('firstName').value;
        if (firstName !== '' && !/^[a-zA-Z]+$/.test(firstName)) {
            errors.push("First name must consist of alpha letters only.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "First name must consist of alpha letters only.";
            document.getElementById('firstName').parentNode.insertBefore(errorContainer, document.getElementById('firstName'));
            document.getElementById('firstName').classList.add('error-field'); 
        }

        const lastName = document.getElementById('lastName').value;
        if (lastName !== '' && !/^[a-zA-Z]+$/.test(lastName)) {
            errors.push("Last name must consist of alpha letters only.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "Last name must consist of alpha letters only.";
            document.getElementById('lastName').parentNode.insertBefore(errorContainer, document.getElementById('lastName'));
            document.getElementById('lastName').classList.add('error-field'); 
        }

        const projectTitle = document.getElementById('projectTitle').value;
        if (projectTitle !== '' && !/^[a-zA-Z]+$/.test(projectTitle)) {
            errors.push("Project title must consist of alpha letters only.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "Project title must consist of alpha letters only.";
            document.getElementById('projectTitle').parentNode.insertBefore(errorContainer, document.getElementById('projectTitle'));
            document.getElementById('projectTitle').classList.add('error-field'); 
        }

        //  email formatting
        const email = document.getElementById('email').value;
        if (email !== '' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,20})+$/.test(email)) {
            errors.push("Invalid email format.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "Invalid email format.";
            document.getElementById('email').parentNode.insertBefore(errorContainer, document.getElementById('email'));
            document.getElementById('email').classList.add('error-field'); 
        }

        // phone number formatting
        const phoneNumber = document.getElementById('phoneNumber').value;
        if (phoneNumber !== '' && !/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
            errors.push("Phone number must be in the form XXX-XXX-XXXX.");
            const errorContainer = document.createElement('div');
            errorContainer.classList.add('error-message');
            errorContainer.style.color = 'red';
            errorContainer.style.marginBottom = '5px';
            errorContainer.textContent = "Phone number must be in the form 999-999-9999.";
            document.getElementById('phoneNumber').parentNode.insertBefore(errorContainer, document.getElementById('phoneNumber'));
            document.getElementById('phoneNumber').classList.add('error-field'); 
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
        } else {
            // If no errors, allow form submission to proceed
            // Form submission will automatically trigger PHP processing
            // PHP will only execute if form submission is allowed
            console.log('No errors detected. Form submission allowed.');
        }
    });

});

