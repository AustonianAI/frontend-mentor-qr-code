import Image from "next/image";
import Link from "next/link";

import qrCode from "../public/image-qr-code.png";

export default function Home() {
  return (
    <main className='bg-light-gray relative h-screen'>
      <div className='absolute inset-0 flex flex-col items-center justify-center'>
        <div className='max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white'>
          <div className='p-4'>
            <Image className='rounded-xl' src={qrCode} alt='QR Code' />
          </div>
          <div className='flex flex-col gap-y-4 px-6 pt-2 pb-8 text-center'>
            <div className='text-2xl font-bold text-dark-blue'>
              Improve your front-end skills by building projects
            </div>
            <p className='font-medium text-grayish-blue'>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
        <footer className='absolute inset-x-0 bottom-0 text-center mb-4'>
          <p className='text-xs text-accent-blue'>
            Challenge by{" "}
            <Link
              href='https://www.frontendmentor.io?ref=challenge'
              target='_blank'
            >
              Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link href='https://github.com/AustonianAI'>Austin Johnson</Link>.
          </p>
        </footer>
      </div>
    </main>
  );
}
