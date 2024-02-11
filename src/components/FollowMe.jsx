
import { linkdin, instagram, facebook, whatsapp, github, discord } from "../Assets/icon"

export default function follow_me() {
  return (
    <div className=" hidden flex flex-col text-green justify-center fixed  text-center lg:block ">
      <h1 className="rotate-90 my-20 mr-10   ">Follow Me </h1>
      <p className="border rotate-90 my-10 mr-14 text-left"></p>
      <div className="flex flex-col w-5 m-5 gap-4  cursor-pointer">
        <img src={linkdin} alt="icon-Linkdin" />
        <img src={instagram} alt="icon-instagram" />
        <img src={facebook} alt="icon-facebook" />
        <img src={whatsapp} alt="icon-whatsapp" />
        <img src={github} alt="icon-github" />
        <img src={discord} alt="icon-discord" />
      </div>



    </div>
  )
}







