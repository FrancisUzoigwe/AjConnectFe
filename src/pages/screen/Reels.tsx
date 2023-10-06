import React from 'react'

import {BsChevronDown} from "react-icons/bs"
import {CgMenuGridR } from "react-icons/cg"
import {FiMenu} from "react-icons/fi"

const community = () => {
  return (
    <div className='w-full h-[100vh] bg-slate-200  mt-[73px] flex justify-center items-center'>
        <div className='w-[] h-[85%] flex  items-center overflow-hidden'>
            <div className=' h-[80%]  ml-[20px]min-w-[500px] max-sm:min-w-[300px]'>
                <div>
                    <div className='font-bold text-[30px] h-[150px]   w-[250px] text-black'> Members</div>
                    <div className='w-[500px] h-[60px] '>
                        <div className='flex justify-between items-center  '>
                            <div className='flex justify-between w-[140px] h-[100%] '>All members <center className='h-7 w-7 rounded bg-pink-400 ml-0 shadow'> 22 </center></div>
                            <div className='flex justify-between w-[150px] h-[100%] '>My connection <center className='h-7 w-7 rounded bg-pink-400 ml-0 shadow'> 12 </center></div>
                            <div className='flex justify-between w-[110px] h-[100%]'>Followers <center className='h-7 w-7 rounded bg-pink-400 ml-0 shadow'> 16 </center></div>
                           
                        
                    </div>
                    </div>
                   <div className='flex justify-end '>
                   <div className='w-[600px] h-[60px] mb-10  flex  justify-end items-center'>
                        <center className='w-[180px] h-10 bg-white mr-7 rounded flex justify-center items-center'>  Recently Active <div className='m-2'><BsChevronDown /></div></center>
                        <div className='w-[100px] h-10 bg-white mr-5 rounded flex justify-end' >
                            <div className='w-[49%] h-10 border  flex justify-center items-center'> <CgMenuGridR className='text-[30px]'> </CgMenuGridR></div>
                            <div className='w-[49%] h-10  flex justify-center items-center'> <FiMenu className='text-[30px]'> </FiMenu></div>
                            </div> 
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                   </div>
                    <div className='w-[100%] flex  items-center justify-center '>
                
                       
                
                           <div className='w-[600px] h-[100%] rounded-[10px] mr-5 bg-purple-400  flex justify-center  items-center flex-col '>  
                       <div className=' h-[200px] w-[200px]'>
                       <div className='h-[200px] w-[200px] rounded-[50%] bg-white mt-5 relative flex justify-center'>
                        <div className='w-[100px]  h-8 bg-pink-300 bottom-0  absolute rounded flex justify-center items-center '> Admin </div>
                       </div>
                      
                    </div>
                       <div className='w-[100%] h-[200px] mt-10 flex justify-center  items-center flex-col'>
                      <div> John</div>
                      <div>Joined Oct 10 2023</div>
                      <div className='mt-10'>13 followers</div>
                     
                       </div>
                       
                        </div>
                           <div className='w-[600px] h-[100%] rounded flex bg-purple-400 justify-center  items-center flex-col '>  
                       <div className=' h-[200px] w-[200px]'>
                       <div className='h-[200px] w-[200px] rounded-[50%] bg-white mt-5 relative flex justify-center'>
                        <div className='w-[100px]  h-8 bg-pink-300 bottom-0  absolute rounded flex justify-center items-center '> Admin </div>
                       </div>
                      
                    </div>
                       <div className='w-[100%] h-[200px]  mt-10 flex justify-center  items-center flex-col'>
                      <div> John</div>
                      <div>Joined Oct 10 2023</div>
                      <div className='mt-10'>13 followers</div>
                     
                       </div>
                       
                        </div>
                       
 
                    
                      
                     
                    </div>
                </div>
            </div>
            
            <div className='w-[400px]  mt-20 rounded-[15px]  sm:hidden max-[320px]:hidden max-[375px]:hidden lg:flex items-center justify-end'>
            <div className='w-full   flex justify-between flex-col items-center'>
            <div className='w-[85%] h-[400px] bg-white rounded-[10px] flex justify-center items-center'>
            <div className='w-[90%] h-[300px]'>
            <div className='text-[20px] font-bold mt-5'>  Solve Results</div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> First Name</div>
        <div className='w-full border-2 h-10 border-purple-400'> </div>
    </div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> Last Name</div>
        <div className='w-full border-2 h-10 border-purple-400'> </div>
    </div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> Reset</div>
        <div className='w-full  h-12 bg-purple-400 flex justify-center items-center rounded'> Search </div>
    </div>
            </div>
    
    </div>
            <div className='w-[85%] h-[55%] mt-5 bg-white rounded-[10px] flex justify-center items-center'>
            <div className='w-[90%] h-full'>
            <div className='text-[20px] font-bold mt-5'>  Filter Results</div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> First Name</div>
        <div className='w-full border-2 h-10 border-teal-500'> </div>
    </div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> Last Name</div>
        <div className='w-full border-2 h-10 border-teal-500'> </div>
    </div>
    <div>
        <div className=' text-[20px] font-medium mt-5'> Reset</div>
        <div className='w-full  h-12 bg-teal-400 flex justify-center items-center rounded'> Search </div>
    </div>
          
    
    </div>
            </div>
              
            
            </div>
           
            </div>
        </div>
    </div>
 
  )
}

export default community