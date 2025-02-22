import toast from "react-hot-toast"
import amazon from "../../assets/images/Group 1.png"
import { useFormik } from 'formik'
import axios from "axios"
import { object, ref, string } from "yup";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../../Network/AuthApi";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/g;
    const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    const validationSchema = object({
        name: string().required("Name is required").min(3, "Name must be more than 3 char").max(25, "Name must be less than 25 char"),
        email: string().required("Email is required").email("Enter a valid email"),
        password: string().required("password is required").matches(password, "password should be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        rePassword: string().required("Repassword is required").oneOf([ref("password")], "Password and Repassword must be the same"),
        phone: string().required("phone is required").matches(phoneRegex, "Enter a Egyption phone number"),
    })

    async function sendDataToRegister(values) {
        // const loadingId = toast.loading("Waiting....")
        // try {
        //     const options = {
        //         url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        //         method: "POST",
        //         data: values
        //     }
        //     const { data } = await axios.request(options)
        //     if (data.message == "success") {
        //         localStorage.setItem("userToken", data.token)
        //         // setUserLogin(data.token)
        //         toast.success("User created successfully")
        //         // setTimeout(() => {
        //         //     navigate("/login")
        //         // }, 2000)
        //         console.log(data);
                
        //     }
        // } catch (error) {
        //     toast.error(error.response.data.message)
        // }
        // finally {
        //     toast.dismiss(loadingId)
        // }
        dispatch(RegisterAction(values)).then(res=>{
            console.log(res);
            navigate('/login')
        })

    }

    const formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "password": "",
            "rePassword": "",
            "phone": ""
        },
        validationSchema,
        onSubmit: sendDataToRegister
    })
    

    return (
        <>
            <section>
                <div className="container flex flex-col items-center">
                    <img src={amazon} className="mb-[30px] w-[150px]" alt="" />
                    <div className="card max-w-[587px] w-full py-[51px] px-[37px] border-[.2px] border-solid border-[#d5d9d9] rounded-[8px] font-ibm ">
                        <h3 className='font-[500] text-[28px] '>Create Account</h3>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='font-[600] text-[14px] mb-2'>Your name</label>
                                <input type="text" value={formik.values.name} name='name' onBlur={formik.handleBlur} onChange={formik.handleChange}  id='name' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px]  rounded-[8px]'/>
                                {formik.errors.name && formik.touched.name ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.name}</p>) : ""}
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='font-[600] text-[14px] mb-2'>Your email</label>
                                <input type="email" value={formik.values.email} name='email' onBlur={formik.handleBlur} onChange={formik.handleChange}  id='email' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]'/>
                                {formik.errors.email && formik.touched.email ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.email}</p>) : ""}
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone" className='font-[600] text-[14px] mb-2'>Mobile number</label>
                                <input type="tel" value={formik.values.phone} name='phone' onBlur={formik.handleBlur} onChange={formik.handleChange}  id='phone' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]'/>
                                {formik.errors.phone && formik.touched.phone ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.phone}</p>) : ""}
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="password" className='font-[600] text-[14px] mb-2'>Password</label>
                                <input type="password" value={formik.values.password} name='password' onBlur={formik.handleBlur} onChange={formik.handleChange}  id='password' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]'/>
                                {formik.errors.password && formik.touched.password ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.password}</p>) : ""}
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="rePassword" className='font-[600] text-[14px] mb-2'>Confirm Password</label>
                                <input type="password" value={formik.values.rePassword} name='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange}  id='rePassword' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]'/>
                                {formik.errors.rePassword && formik.touched.rePassword ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.rePassword}</p>) : ""}
                            </div>
                            <button type="submit" className="w-full bg-[#FFD814] hover:bg-[#ebc400] py-[9px] mt-3 rounded-[10px]">Submit</button>
                            <div className="w-full h-[1px] bg-[#D9D9D9] mt-3"></div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
