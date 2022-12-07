import { Formik, Form, Field, ErrorMessage } from 'formik'

export const Login = () => {

    const publicar = (values) => {
        console.log(values)
        document.querySelector(".emailField").value = ''
        document.querySelector(".passField").value = ''
    }

    const validate = (value) => {
        const error = {}
        if(value.pass.length < 8) error.pass = 'Password must be 8 characters'
        return error
    }

    const postLog = async (values) => {
        console.log(values)

        const proxy = 'https://api.allorigins.win/raw?url='
        let url = 'https://ariptosv.onrender.com/users/log-in'
        let log = await fetch(proxy+url, {
            method: 'POST', 
            body: values
        })
        .then((response)=>response.json())
        .then((data) => data)
        .catch((err)=>console.log(err))
        
        manageErrors(log)
    }

    const manageErrors = (logResponse) => {
        console.log(logResponse)
        document.querySelector(".emailField").value = ''
        document.querySelector(".passField").value = ''
    }

    return (
        <div className="logPageContainer cFlex">
            <div className='logContainer cFlex'>
                <h1>Log in</h1>
                <Formik
                    initialValues={
                        {
                            email:"",
                            pass:""
                        }
                    }
                    onSubmit={postLog}
                    validate={validate}
                >
                    <Form className='formContainer cFlex'>
                        <div className='fieldsContainer cFlex'>
                            <p>Email</p>
                            <Field name="email" type="text" className="emailField settingField"/>
                            <p>Password</p>
                            <Field name="pass" type="password" className="passField settingField"/>
                            <ErrorMessage component='p' name='pass' className='errorMessage errorColor'/>
                        </div>
                        <div className='buttonContainer cFlex'>
                            <button type="submit" className='settingButton'>Log In</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}