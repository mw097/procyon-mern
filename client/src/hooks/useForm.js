import { useState } from "react"

/**
 * A react hook that generates validation functions depending on options passed.
 * @param {*} options that takes required, patter and custom function
 * @returns {} object, change function, submit function
 */
export const useForm = (options) => {
    const [data, setData] = useState(options?.initialValues || {});
    const [errors, setErrors] = useState({});

    const handleChange = (key, sanitizeFn) => (e) => {
        const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
        setData({
            ...data,
            [key]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                //Required
                if (validation?.required?.value && !value) { //Check negation before release!
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }
                //Pattern
                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }
                //Custom
                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            setErrors({});

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
    };
}