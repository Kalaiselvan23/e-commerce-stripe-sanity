'use client'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs={
    price:string,
    
}
const FilterForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        // formstate: { errors },
    } = useForm();
    const onSubmit:SubmitHandler<Inputs> = (data)=> console.log(data)
    // console.log(watch("example"))
    return (
        <div className='my-5'>
        </div>
    )
}

export default FilterForm
