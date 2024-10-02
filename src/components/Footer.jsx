import React, { memo, Suspense } from "react";
import {
  arrowwh,
  instagram,
  instagramwh,
  linkedin,
  linkedinwh,
  tffooter,
  tffootersm,
  x,
  xwh,
} from "../assets";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ContactDialog = memo(() => (
  <AlertDialog>
    <AlertDialogTrigger>
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase">
          Contact
        </div>
        <img src={arrowwh} className="w-auto h-2" />
      </div>
    </AlertDialogTrigger>
    <AlertDialogContent className="w-auto max-w-[90%] sm:max-w-max opacity-100 bg-offwhite rounded-3xl">
      <AlertDialogHeader>
        <AlertDialogDescription>
          <div className="flex flex-col items-center gap-4 self-stretch sm:p-4">
            <div className="self-stretch text-black font-spacemono text-[2rem] not-italic font-medium leading-[-0.02rem]">
              Contact
            </div>
            <div className="flex flex-col items-start gap-[6px] self-stretch">
              <div className="self-stretch text-black font-spacemono text-[1rem] sm:text-[1.5rem] not-italic font-light leading-[-0.015rem]">
                Work inquires:{" "}
                <span className="font-bold text-wrap">
                  technicalcouncil@pragyan.org
                </span>
              </div>
              <div className="self-stretch text-black font-spacemono text-[0.825rem] sm:text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
                Technical Council of NIT Trichy
              </div>
              <div className="self-stretch text-black font-spacegrotesk text-[0.825rem] sm:text-[1.125rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
                Samarth <span className="font-light">7505360572</span>
                <br />
                Sanjana <span className="font-light">9653226903</span>
                <br />
                Vishnucharan <span className="font-light">7708951932</span>
                <br />
              </div>
              <div className="sm:hidden flex justify-center items-center w-full">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex w-fit justify-center items-start gap-3 ">
                    <a
                      href="https://www.instagram.com/tc_nitt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagram} className="max-w-none w-fit" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://in.linkedin.com/company/technical-council-nit-trichy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedin} className="max-w-none w-fit" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] sm:px-3">
            <div className="text-black  text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase ">
              Continue
            </div>
          </div>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
));

const FooterLink = memo(({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex px-[0.5rem] py-[0.63rem] sm:py-[6px] sm:px-3 justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] sm:border border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold sm:leading-5 tracking-[0.35px] uppercase">
          {text}
        </div>
        <img src={arrowwh} className="w-auto h-2 sm:max-w-none sm:w-fit" />
      </div>
    </div>
  </a>
));

const FooterMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-full">
    <div className="max-h-screen flex flex-col justify-center items-start flex-shrink-0 border-l border-r border-b border-l-edge border-r-edge border-b-edge w-[91.467%] mx-auto mb-4 py-[0.625rem] px-0 gap-4">
      <div className="flex justify-center items-center self-stretch py-[0.15rem] select-none pointer-events-none">
        <img src={tffootersm} />
      </div>
      <div className="flex py-0 px-4 flex-col justify-center gap-[1rem] self-stretch">
        <div className="flex w-full justify-between items-center gap-[0.625rem]">
          <div className="w-full h-auto flex justify-between flex-shrink-0 gap-[0.625rem]">
            <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
              <ContactDialog />
            </div>
            <FooterLink
              href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
              text="Locate Us"
            />
            <FooterLink
              href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view"
              text="Archive"
            />
          </div>
        </div>
        <div className="flex justify-center items-start gap-[0.3125rem]">
          <div className="text-[#A1A1A1] font-spacemono text-[0.75rem] not-italic font-normal leading-normal tracking-[-0.0075rem] uppercase">
            © 2024 TRANSFINITTE. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
));

const FooterDesktop = memo(() => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex h-auto py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black">
      <div className="flex justify-center items-center self-stretch tf-footer select-none pointer-events-none">
        <img src={tffooter} />
      </div>
      <div className="w-full h-[1.25rem] flex py-0 px-[46px] justify-between items-center self-stretch">
        <div className="flex justify-center items-center gap-[5px]">
          <div className="text-[#A1A1A1] font-spacemono text-[1rem] not-italic font-normal leading-normal tracking-[-0.01rem] uppercase">
            © 2024 TRANSFINITTE. All Rights Reserved.
          </div>
          <div className="flex w-fit pb-1 justify-center items-start gap-3 ">
            <div>
              <a
                href="https://www.instagram.com/tc_nitt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramwh} className="max-w-none w-fit" />
              </a>
            </div>
            <div>
              <a
                href="https://in.linkedin.com/company/technical-council-nit-trichy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinwh} className="max-w-none w-fit" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex py-[6px] px-3 justify-center items-center gap-[10px] rounded-full border border-solid border-footerbutton footer-links hover:underline decoration-white">
            <ContactDialog />
          </div>
          <FooterLink
            href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
            text="Locate Us"
          />
          <FooterLink
            href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view"
            text="Archive"
          />
        </div>
      </div>
    </div>
  </div>
));

const Footer = () => {
  return (
    <div className="max-w-full select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <FooterMobile />
        <FooterDesktop />
      </Suspense>
    </div>
  );
};

export default Footer;
