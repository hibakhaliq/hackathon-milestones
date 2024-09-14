document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement

    const nameElement = document.getElementById('name') as HTMLInputElement
    const emailElement = document.getElementById('email') as HTMLInputElement
    const phoneElement = document.getElementById('phone') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLInputElement
    const experienceElement = document.getElementById('experience') as HTMLInputElement
    const skillsElement = document.getElementById('skills') as HTMLInputElement

    if (lePictureInput&& nameElement.value && emailElement.value && phoneElement.value && educationElement.value && experienceElement.value && skillsElement.value){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): "" ;



        //creating resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src = "${profilePictureURL} alt ="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone:</strong> ${phone} </p>

        <h3>Eduction</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }else {
            console.error('The elements are missing')
        }


    } else {
        console.error('One or more elements are missing')}
    })
    


    
