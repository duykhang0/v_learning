import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { dangNhapNguoiDung } from '@/redux/reducers/nguoiDungReducer';
function SignIn() {
    const dispatch = useDispatch();
    const signInChema = Yup.object().shape({
        email: Yup.string().required("Tài khoản không được bỏ trống!"),
        matKhau : Yup.string().required("Mật khẩu không được bỏ trống !").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
            "Mật khẩu phải ít nhất 8 ký tự, bao gồm chữ, số và ký tự đặc biệt!")

    })
    const signInFormik = useFormik({
        initialValues: {
            taikhoan: "",
            matKhau : ""
        },
        onSubmit: values => {
            dispatch(dangNhapNguoiDung(values))
        },
        validationSchema : signInChema
    })
  return (
    <div className="form-container sign-in ">
            <form onSubmit={signInFormik.handleSubmit}>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <div className="social-icons">
            <a href="#" className="icon"><GoogleIcon/></a>
                    <a href="#" className="icon"><FacebookIcon/></a>
                    <a href="#" className="icon"><GitHubIcon/></a>
                    <a href="#" className="icon"><LinkedInIcon/></a>
            </div>
            <span>or use your email password</span>
            <div className='email w-full'>
                <input type="email" placeholder="Tài Khoản" name='taiKhoan' onChange={signInFormik.handleChange} value={signInFormik.values.taiKhoan}/>
                {signInFormik.errors.email && <span className='error_text'>{signInFormik.errors.email
                }</span>} 
            </div>
            <div className='matKhau w-full'>
                <input type="password" placeholder="Password" name='matKhau' onChange={signInFormik.handleChange} value={signInFormik.values.matKhau}/>
                {signInFormik.errors.matKhau && <span className='error_text'>{signInFormik.errors.matKhau}</span>}
            </div>
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
            </form>
        </div>
  )
}

export default SignIn