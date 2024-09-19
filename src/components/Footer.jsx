import React from 'react'
import { arrowwh, instagram, linkedin, tffooter, x } from '../assets'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Footer = () => {
  return (
    <div className='mx-auto bg-black max-w-[93.194%]'>
      <div className='flex h-auto py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black'>
        <div className='flex justify-center items-center self-stretch tf-footer'>
            <img
            src={tffooter}/>
        </div>
        <div className='w-full h-[1.25rem] flex py-0 px-[46px] justify-between items-center self-stretch'>
          <div className='flex justify-center items-center gap-[5px]'>
            <div className='text-[#A1A1A1] font-geistmono text-[1rem] not-italic font-normal leading-normal tracking-[-0.01rem] uppercase'>© 2024 TRANSFINITTE. All Rights Reserved.</div>
            <div className='flex w-fit pb-1 justify-center items-start gap-3 '>
              <div>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <img
                  src={instagram}
                  className='max-w-none w-fit' />
                </a>
              </div>
              <div>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkedin}
                  className='max-w-none w-fit' />
                </a>
              </div>
              <div>
                <a href='' target="_blank" rel="noopener noreferrer">
                  <img
                  src={x}
                  className='max-w-none w-fit' />
                </a>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links hover:underline decoration-white'>
              <AlertDialog>
                <AlertDialogTrigger>
                  <div className='flex flex-row gap-1 justify-center items-center'>
                    <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>Contact</div>
                    <img
                    src={arrowwh}
                    className='max-w-none w-fit'/>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='w-auto max-w-max opacity-100 rounded-lg'>
                  <AlertDialogHeader>
                    <AlertDialogDescription>
                      <div className='flex flex-col items-start gap-4 self-stretch'>
                        <div className='self-stretch text-white font-geist text-[2rem] not-italic font-medium leading-[-0.02rem]'>Contact</div>
                        <div className='flex flex-col items-start gap-[6px] self-stretch'>
                          <div className='self-stretch text-white font-geist text-[1.5rem] not-italic font-light leading-[-0.015rem]'>
                          Work inquires: <span className='font-bold'>technicalcouncil@pragyan.org</span>
                          </div>
                          <div className='self-stretch text-white font-geist text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]'>Technical Council of NIT Trichy</div>
                          <div className='self-stretch text-white font-geist text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]'>
                          Samarth <span className='font-light'>9670664115</span><br/>
                          Sanjana <span className='font-light'>9380872847</span><br/>
                          Vishnucharan <span className='font-light'>7760942275</span><br/>
                          </div>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>
                    <div className='flex flex-row gap-1 justify-center items-center rounded-full border border-solid border-footerbutton footer-links py-[6px] px-3'>
                      <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'>Continue</div>
                    </div>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links hover:underline decoration-white'>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'><a href='https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57' target="_blank" rel="noopener noreferrer">Locate Us</a></div>
                <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>
            </div>
            <div className='flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links hover:underline decoration-white'>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <div className='text-offwhite text-center font-geistmono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase'><a href='https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view' target="_blank" rel="noopener noreferrer">2023 Archive</a></div>
                <img
                src={arrowwh}
                className='max-w-none w-fit'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
