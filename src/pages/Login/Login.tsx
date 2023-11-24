import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'

import {Button, FormController, Input, Typography} from 'components/share'
import {login} from 'src/api'
import {setEmail} from 'src/store/user'
import {useAppDispatch} from 'src/utils/redux-hooks/hooks'

import styles from './Login.module.scss'

const Login = () => {
    const dispatch = useAppDispatch()
    const {
        control,
        setError,
        formState: {isValid},
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
        },
    })
    const navigate = useNavigate()
    const onSubmit = async (data: any, e: any) => {
        e.preventDefault()
        console.log(data.email)
        try {
            const response = await login(data)
            const {status, message} = response && response.data
            console.log(status)
            if (status === 'SUCCESS') {
                dispatch(setEmail(data.email))
                navigate('/home')
            } else {
                throw new Error(message)
            }
        } catch (error) {
            console.log(error.message)
            if (error.message === 'User with the provided email already exists') {
                setError('root.serverError', {
                    type: 'FAILED',
                    message: 'User with the provided email already exists',
                })
            } else {
                setError('root.serverError', {
                    type: 'FAILED',
                    message: 'Oops... Something go wrong',
                })
            }
        }
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.headerButtons}>
                <Link to="/login">
                    <Button
                        className={styles.buttonLogin}
                        type="button"
                        size="small"
                        mode="outlinedBlack"
                        variant="primary"
                        onClick={() => console.log('clicked')}
                    >
                        Log in
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button
                        className={styles.buttonSignUp}
                        type="button"
                        size="small"
                        mode="defaultWhite"
                        variant="primary"
                        onClick={() => console.log('clicked')}
                    >
                        Sign up
                    </Button>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <form
                    className={styles.formContainer}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Link to="/">
                        <button className={styles.backButton}>Back</button>
                    </Link>
                    <Typography variant="Header2XL" className={styles.formTitle}>
                        Login
                    </Typography>
                    <div className={styles.controllerContainer}>
                        <FormController
                            name="email"
                            control={control}
                            rules={{
                                required: 'Field is required!',
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'Invalid email address!',
                                },
                            }}
                            render={({field}: any) => (
                                <Input
                                    {...field}
                                    ref={null}
                                    variant="email"
                                    label="Your email address"
                                    id="email"
                                />
                            )}
                        />
                        <FormController
                            name="password"
                            control={control}
                            errorClassName={styles.passwordError}
                            rules={{
                                required: 'Field is required!',
                                pattern: {
                                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                    message:
                                        'Password must contain: a lower case letter, a upper case letter, a number, minimum 6 characters',
                                },
                            }}
                            render={({field}: any) => (
                                <Input
                                    {...field}
                                    ref={null}
                                    variant="password"
                                    label="Password"
                                    id="password"
                                />
                            )}
                        />
                        <div className={styles.centerButton}>
                            {isValid ? (
                                <Button
                                    className={styles.buttonEnter}
                                    type="submit"
                                    size="large"
                                    mode="defaultBlack"
                                    variant="secondary"
                                    onClick={() => console.log('clicked')}
                                >
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    className={styles.buttonEnter}
                                    type="submit"
                                    size="large"
                                    mode="disabled"
                                    variant="secondary"
                                    onClick={() => console.log('clicked')}
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                    <div>
                        <Typography variant="Header2XL" className={styles.createText}>
                            Created with ❤️ in<span className={styles.spanText}>&nbsp;i</span>
                            Tech
                            <span className={styles.spanText}>Art</span>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
