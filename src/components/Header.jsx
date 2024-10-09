import { arrowwh, numbersvg, tfbadge } from "../assets";
import Flip from "./Flip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Header = () => {

  return (
    <div className="sticky top-0 z-50">
      {/* Mobile Version */}
      <div className="block sm:hidden relative">
        <div className="flex items-center justify-between bg-black shrink-0 w-full border-b-[#EDEDED26] border-b border-solid py-4 px-8 sticky top-0 shadow-md z-50 content-stretch">
          <img src={tfbadge} />
          <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase">
          REGISTER
        </div>
        <img src={arrowwh} className="w-auto h-2" />
      </div>
    </AlertDialogTrigger>

    <AlertDialogContent className="w-auto max-w-[90%] opacity-100 bg-offwhite rounded-3xl">
      <AlertDialogHeader>
        <AlertDialogDescription>
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="self-stretch text-black font-spacegrotesk text-[2rem] not-italic font-medium leading-[-0.02rem]">
              Are you sure?
            </div>
            <div className="self-stretch text-black font-spacegrotesk text-[1rem] not-italic font-light leading-[-0.015rem]">
            You are being redirected to <span className="font-bold">register.transfinitte.com</span> to continue with the registration. Do you wish to proceed?
<br/><br/>Note: The registration may not work if you are connected to the institute wifi (HP). Please make sure you are using an alternate, stable network connection.
<br/></div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] ">
            <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
              Cancel
            </div>
          </div>
        </AlertDialogCancel>
        <AlertDialogAction onClick={() => window.location.href = 'https://register.transfinitte.com'}>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] ">
            <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
              Continue
            </div>
          </div>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden sm:flex justify-between items-center h-max py-5 bg-black shrink-0 self-stretch border-b-[#EDEDED26] border-b border-solid pl-12 sticky top-0 shadow-md z-50 content-stretch">
        <div className="w-[15vw]">
          <Flip />
        </div>
        <div className="flex flex-row flex-grow gap-1 self-stretch items-center justify-center">
          <div className="text-white text-center text-xl font-spacegrotesk items-center font-medium leading-5 tracking-[-0.1px] uppercase">
            Transfinitte
          </div>
          <div>
            <a>
              <img src={numbersvg} alt="24" />
            </a>
          </div>
        </div>
        <div className="w-fit h-fit flex gap-[36px] mr-[3rem] justify-center items-center">
          <a
            href="https://www.instagram.com/tc_nitt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-white"
          >
            <button className="flex flex-row gap-1 justify-center items-center">
              <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
                INSTAGRAM
              </div>
              <div>
                <img src={arrowwh} className="max-w-none w-fit" />
              </div>
            </button>
          </a>
          <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] cursor-pointer not-italic font-bold tracking-[0.35px] uppercase">
          REGISTER
        </div>
        <img src={arrowwh} className="w-auto h-2" />
      </div>
    </AlertDialogTrigger>

    <AlertDialogContent className="w-auto max-w-[90%] opacity-100 bg-offwhite rounded-3xl">
      <AlertDialogHeader>
        <AlertDialogDescription>
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="self-stretch text-black font-spacegrotesk text-[2rem] not-italic font-medium leading-[-0.02rem]">
              Are you sure?
            </div>
            <div className="self-stretch text-black font-spacegrotesk text-[1rem] not-italic font-light leading-[-0.015rem]">
            You are being redirected to <span className="font-bold">register.transfinitte.com</span> to continue with the registration. Do you wish to proceed?
<br/><br/>Note: The registration may not work if you are connected to the institute wifi (HP). Please make sure you are using an alternate, stable network connection.
<br/></div>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] ">
            <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
              Cancel
            </div>
          </div>
        </AlertDialogCancel>
        <AlertDialogAction onClick={() => window.location.href = 'https://register.transfinitte.com'}>
          <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] ">
            <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
              Continue
            </div>
          </div>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
