import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const reset = () => setValues(initialState)
    const handlerInputChange = ({ target }) => setValues({ ...values, [target.name]: target.value })
    return [values, handlerInputChange, reset]
}
