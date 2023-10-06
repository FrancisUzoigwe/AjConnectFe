import Blog from "../../components/private/Blog";


const Profile = () => {
  return (
    <div className="w-full h-[100%] mt-[68px]  max-sm:w-full flex justify-center items-center ">
      <div className="w-[90%] h-[100vh flex justify-between]">
    <div className="w-[60vw] h-[70vh] bg-white rounded-[10px] overflow-hidden" >
      <div className="w-full h-[50%] bg-blue-500 flex justify-center">
    <div className="h-[500px] w-[500px] bg-yellow-500 mt-[100px] flex justify-center flex-col items-center">
    <div className=" h-[200px] w-[200px] rounded-[50%] bg-white "></div>
    <div className="font-bold text-[30px] mt-5">John</div>
    <div className=""> @John Joined October 2023</div>
    <div>13 followers      12following </div>
   <div className="flex mt-5 justify-between w-[100px]">
   <div className="w-[30px] h-[30px] bg-slate-500 rounded-[50%]"></div>
   <div className="w-[30px] h-[30px] bg-slate-500 rounded-[50%]"></div>
   <div className="w-[30px] h-[30px] bg-slate-500 rounded-[50%]"></div>
   </div>
    </div>
      </div>
    </div>
    <div className=" w-[20vw] h-[60vh] bg-slate-300 ml-10 rounded-[10px] flex justify-center items-center  ">
    <div className="w-[90%] bg-pink-200 h-[90%] flex justify-center items-center">
      <div className="h-[200px] w-[200px] bg-slate-300 rounded-[50%]">
  
      </div>

    </div>
    </div>
      </div>
         
         

     </div>
    
  );
};

export default Profile;
