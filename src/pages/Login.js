import { useFormik } from "formik"
import * as Yup from 'yup'

    const Login = () => {
        const formik = useFormik({
            initialValues: {
                username: "",
                password: ""
            },
            onSubmit: (values) => {
                console.log(values)
            },
            validationSchema: Yup.object().shape({
                username: Yup.string()
                  .max(15, "Your username is too long")
                  .required("Username is required"),
                password: Yup.string()
                  .min(6, "Your password is too short")
                  .required("A password is required")
              }),
              validateOnChange: false
            //   permet de valider ou non que auSubmit 
    })    
    
    return (
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column col-3 mx-auto mt-5" >
            <label for="username">Username</label>
            <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className= "my-2"
            />
            {formik.errors.username && <p>{formik.errors.username}</p>}
            <label for="password">Password</label>
            <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className= "my-2"
            />
            {formik.errors.password && <p>{formik.errors.password}</p>}
            <button 
                type="submit"
                className= "mt-3"
            >
                Submit
            </button>
        </form>
    );
};

export default Login;