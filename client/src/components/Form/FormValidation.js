const FormValidation = (data) => {
    const regex = /^[A-Za-z\u00C0-\u00FFñÑ][A-Za-z\u00C0-\u00FFñÑ\s]*$/u
    const errors = {}

    if (!regex.test(data.name) || data.name.length < 3) {
        errors.name = "Name must not has special characters or begin with space. Must be longer  than 2 characters"
    }
    if (!data.difficulty) {
        errors.difficulty = "Should select a difficulty level";
    }
    if(!data.duration ){
        errors.duration = "Duration should be between 1 and 24 hours"
        
    }
    if(!data.season ){
        errors.season = 'Should select a season'
    }
    if (data.country.length < 1) {
        errors.country = "Should select at least 1 country to associate the activity with";
    }
    return errors
}
export default FormValidation