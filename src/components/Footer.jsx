const Footer = () => {
  return (
    <footer className='min-h-20 w-full'>
      <div className='min-h-64 p-10 bg-black'>
        <div className='h-full flex flex-col md:justify-between justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-8 cursor-pointer'>
              <div className="text-muted-foreground hover:text-white">
                <p>About us</p>
              </div>

              <div className='text-muted-foreground hover:text-white'>
                Terms
              </div>

              <div className='text-muted-foreground hover:text-white'>
                Privacy Policy
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 mt-10">
              <div className="flex flex-row gap-3">
                <img 
                  src="/media/twitter.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="hover:invert cursor-pointer bg-white p-0.5 rounded-sm transition-all"
                />
                <img 
                  src="/media/youtube.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="hover:invert cursor-pointer bg-white p-0.5 rounded-sm transition-all"
                />
                <img 
                  src="/media/fb.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="hover:invert cursor-pointer bg-white p-0.5 rounded-sm transition-all"
                />
              </div>
            </div>

            <div className="flex flex-row gap-4 p-5 justify-center sm:justify-start">
              <img 
                src="/media/applestore.svg"
                alt="logo"
                width={140}
                height={40}
                className="hover:opacity-70 cursor-pointer"
              />
              <img 
                src="/media/googleplay.svg"
                alt="logo"
                width={160}
                height={40}
                className="hover:opacity-70 cursor-pointer"
              />
            </div>
          </div>

          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-muted-foreground text-sm'>
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
