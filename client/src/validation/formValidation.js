const formValidationOptions = {
    validations: {
        username: {
            required: {
                value: true,
                message: 'This field is required',
            },
            pattern: {
                value: '^[A-Za-z]*$',
                message: 'You\'re not allowed to...',
            },
        },
        email: {
            required: {
                value: true,
                message: 'This field is required',
            },
            pattern: {
                value: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
                message: 'You\'re not allowed to...',
            },
        },
        password: {
            required: {
                value: true,
                message: 'This field is required',
            },
            custom: {
                isValid: (value) => value?.length > 8,
                message: 'The password needs to be at...',
            },
        },
    },
    onSubmit: () => alert('User submitted!'),
    initialValues: {
        username: 'John'
    }
};

export default formValidationOptions;