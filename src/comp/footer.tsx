import React from 'react'
import Dropup from './drop'
import Dropdown from './drop'
import { Footerdata } from './footerdata'
import { FaEnvelope } from "react-icons/fa"

export const Footer = () => {
    const dataHeaderZero = Footerdata[0].header
    const dataListZero = Footerdata[0].list
    const dataHeaderOne = Footerdata[1].header
    const dataListOne = Footerdata[1].list
    const dataHeaderTwo = Footerdata[2].header
    const dataListTwo = Footerdata[2].list
 
    
  return (
    <div className=' bg-black text-white h-[33rem]'>

    <div className='flex flex-wrap gap-7'>
        <div className=' my-20 pl-[72px] '>

            <div className=''><img src="https://cdn.shopify.com/s/files/1/2091/0251/files/logo-white-105_71e79249-fe62-4301-8a26-2342f207106a_x35@2x.png?v=1613161823" alt="motion" height={120} width={120}/></div>
            <br />
            <div className='py-2 flex gap-4'>

            <svg  xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="white"></path> </svg>
                <svg className="color: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" fill="#ffffff"></path></svg>
                </div>
        </div>
        <div className='flex ml-36 gap-32'>
            <div>

            <li className=' flex flex-col my-20'>
                <>
                <h2 className='font-bold '>{dataHeaderZero}</h2>
                <ul className='py-5'>

                {dataListZero.map((item: any) => {
                    console.log(item)
                    return <li className=' flex flex-col py-[0.4rem] text-white'>{item}</li>
                })}
                </ul>
                </>
            </li>
                </div>
        <div>

            <li className=' flex flex-col my-20'>
                <>
                <h2 className='font-bold '>{dataHeaderOne}</h2>
                <ul className='py-5'>

                {dataListOne.map((item: any) => {
                    console.log(item)
                    return <li className=' flex flex-col py-[0.4rem] text-white'>{item}</li>
                })}
                </ul>
                </>
            </li>
                </div>
            <div>

            <li className=' flex flex-col my-20'>
                <>
                <h2 className='font-bold '>{dataHeaderTwo}</h2>
                <ul className='py-5'>

                {dataListTwo.map((item: any) => {
                    console.log(item)
                    return <li className=' flex flex-col py-[0.4rem] text-white'>{item}</li>
                })}
                </ul>
                </>
            </li>
                </div>
           
        </div>

        <div className=' my-20  ml-[135px]'>
        <h2 className='font-bold text-lg'>SUBSCRIBE</h2>
            <p className=' py-5'>Subscribe to get special offers,</p>
            <p> free giveaways, and once-in-a-lifetime deals.</p>
            <form className='w-auto py-5 text-white '>
        <input type="email" className=" w-[18rem] p-2  text-md border bg-transparent text-white placeholder:text-white" placeholder="Enter your email" >
            
        </input>
        </form>

        </div>

    </div>
    <div className='flex flex-col items-center justify-center'>
        <div>

        <Dropup/>
        </div>
        <h1 className='my-5'>Powered by Shopify</h1>
    </div>
                </div>
  )
            }
