
const About = () => {
  return (
    <>
    <div className="max-w-[100%] mx-auto bg-[#08123B]">
        <div className="w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 pt-[100px]">
            <div className="flex flex-col gap-5 items-center">
                <div>
                    <p className="font-[Nunito] text-[17px] text-white font-bold">About The Event</p>
                </div>
                <div className="font-[Nunito] text-white text-[30px] lg:text-[32px] text-center font-bold">
                    <p>TECHX '24 <br />A State Level Intercollegiate Technical Symposium</p>
                </div>

                <div className="h-[3px] bg-[#118AEF] w-[50%]"></div>
            </div>
            <div>
                <div>
                    <p className="font-[Nunito] text-white text-[16px] leading-8 font-medium text-center">TechX '24 is the premier inter-college symposium, bringing together the brightest minds in technology, innovation, and creativity. Designed to foster collaboration, competition, and cutting-edge exploration, TechX '24 provides a dynamic platform for students to showcase their technical prowess, exchange groundbreaking ideas, and solve real-world challenges.</p>
                </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default About
