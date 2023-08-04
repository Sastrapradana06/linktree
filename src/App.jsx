
import './App.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineLink, AiFillInstagram, AiFillFacebook, } from "react-icons/ai";
import {FaTiktok} from "react-icons/fa"
import { links, sosmed } from './Data';
import pp from './assets/pp.jpg'

function App() {

  return (
    <div className=" flex flex-col justify-center items-center w-full h-[100vh] text-center bg-app">
      <div className="border w-[95%] flex flex-col p-4 gap-5 bg-blur rounded-lg shadow-xl lg:w-[50%] lg:mt-10">
        <div className="p-3">
          <img src={pp} className='w-[135px] h-[135px] border m-auto rounded-full object-cover' />
          <p className='mt-1'>Sastra Pradana</p>
          <h3 className='mt-3 text-center'>Web Developer | Mahasiswa</h3>
        </div>

        <div className="flex flex-col gap-6">
          {links.map((data, i) => {
            return (
              <div className="" key={i}>
                <button className='flex border w-[90%] m-auto items-center p-1 hover:shadow-xl hover:scale-x-105 transition-all duration-300 rounded-lg'>
                  {data.nama === 'Git Hub' && <AiFillGithub  size={50} color='teal'className='ml-5 '/>}
                  {data.nama === 'LinkedIn' && <AiFillLinkedin  size={50} color='teal'className='ml-5 '/>}
                  {data.nama === 'Portofolio' && <AiOutlineLink  size={50} color='teal'className='ml-5 '/>}
                  <a href={data.link} className='text-[1.3rem] w-full'>{data.nama}</a>
                </button>
              </div>
            )
          })}
        </div>

        <div className="border flex items-center p-2 justify-center gap-6 mt-5 rounded-lg w-[95%] m-auto">
          {sosmed.map((data, i) => {
            return (
              <div className="hover:-translate-y-2 duration-300 transition-all" key={i}>
                <a href={data.link}>
                  {data.nama === 'ig' && <AiFillInstagram size={45} color='teal'className='border rounded-full p-1'/>}
                  {data.nama === 'fb' && <AiFillFacebook size={45} color='teal'className='border rounded-full p-1'/>}
                  {data.nama === 'tiktok' && <FaTiktok size={45} color='teal'className='border rounded-full p-1'/>}
                </a>
              </div>
            )
          })}
        </div>
      </div>
        <div className="text-[.8rem] mt-3 mb-2 px-3 py-1 bg-teal-900 text-white rounded-xl">
          <a href='https://api.whatsapp.com/send?phone=6283183679470'>Contact Me</a>
        </div>
    </div>
  )
}

export default App
