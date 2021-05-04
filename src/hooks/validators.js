import * as Yup from "yup";

export const useLoginValidation = () => {
    return Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("This field is required"),
        password: Yup.string()
            .required("This field is required")
            .min(4, "At least 4 characters"),
    })
}

export default (
    useLoginValidation
)