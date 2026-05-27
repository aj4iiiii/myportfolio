import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Work = () => {
  return (
    <div className='flex flex-col  justify-center items-center px-4   py-24  w-full '>
      <p className='font-display lg:mt-44 relative text-6xl lg:text-8xl w-full text-left block lg:max-w-[63rem]'>
        Work{' '}
        <svg
          viewBox='0 0 166.632 21.953'
          overflow='visible'
          id='svg-1498675386_614'
          className='hidden  lg:absolute inset-0 lg:block max-w-[170px] top-[45px]
  left-[191px]'
        >
          <path
            d='M 11.463 20.511 C -20.412 16.704 22.566 -11.331 39.132 5.143 C 55.698 21.618 43.132 12.872 43.132 12.872 L 57.781 7.513 C 61.058 6.314 64.698 7.897 66.055 11.112 L 69.081 18.28 C 69.969 20.384 72.276 21.507 74.48 20.91 L 92.457 16.037 C 100.074 13.972 108.129 14.175 115.632 16.622 L 115.632 16.622 C 123.251 19.107 131.214 20.372 139.228 20.372 L 166.632 20.372'
            fill='transparent'
            strokeWidth='7'
            stroke='#AAA'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </p>

      <div className='flex flex-col gap-14 w-full max-w-[80rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[350px] lg:max-w-[750px] w-full mt-10'>
            <Image
              className='w-full h-auto min-h-[220px] lg:min-h-[400px] object-cover rounded-sm'
              alt='art_gallery_project'
              src={'/Gemini_Generated_Image_ltyg5altyg5altyg.png'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Personal Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Art Gallery
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              A visually rich art gallery web application to explore and
              showcase artworks. Built with a clean UI focused on immersive
              browsing and creative display.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/Art-gallery'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-14 w-full max-w-[80rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[350px] lg:max-w-[750px] w-full mt-10'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='farm_portal'
              src={'/0bcffb76-7786-4d6f-92dc-ee68ebd7e4f6.jpg'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Personal Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Farm Portal
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An integrated platform designed to empower farmers with tools for management,
              resource tracking, and direct market access.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/Art-gallery'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-14 w-full max-w-[80rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[350px] lg:max-w-[750px] w-full mt-10'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='ai_prescription_analyser'
              src={'/med.png'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Personal Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              AI Prescription Analyser
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An advanced AI system that leverages Computer Vision to accurately analyze and
              interpret handwritten or digital medical prescriptions.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/health-script-guardian'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-14 w-full max-w-[75rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[350px] lg:max-w-[750px] w-full mt-10'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='smart_event_portal'
              src={'/new.png'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Professional Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Smart Event Portal
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              A comprehensive portal designed to streamline event management within
              organized communities, featuring automated registrations and real-time updates.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/smart-event-portal'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className='flex flex-col gap-14 w-full max-w-[80rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-16 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[350px] lg:max-w-[750px] w-full mt-10'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='face_blur_buddy_v2'
              src={'/blurrr.png'}
              width={2520}
              height={1540}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-32'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              Funny Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Face Blur Buddy
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An enhanced privacy engine optimized for real-time face detection and
              seamless blurring across various video formats.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/face-blur-buddy'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-14 w-full max-w-[77rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-15 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[340px] lg:max-w-[750px] w-full mt-22'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='neurodocx'
              src={'/neurodocx.png'}
              width={2000}
              height={2000}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-27'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              AI Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              Neurodocx
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An AI-powered MRI diagnosis system for Alzheimer&apos;s and Brain Tumor detection,
              featuring Grad-CAM for explainable AI insights.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/neurodocx'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-14 w-full max-w-[77rem]'>
        <div className='flex flex-col lg:flex-row lg:gap-15 justify-start items-start w-full'>
          <div className='flex flex-col items-start justify-start max-w-[340px] lg:max-w-[750px] w-full mt-22'>
            <Image
              className='w-full h-auto object-cover rounded-sm'
              alt='ai_interview'
              src={'/interview.jpg'}
              width={2000}
              height={2000}
            />
          </div>
          <div className='w-full flex flex-col sm:px-6 lg:px-0  max-w-[350px] my-10 lg:my-27'>
            <p className='font-family-dm-sans text-left text-[13px] mt-10 w-[330px] text-text font-medium'>
              AI Project
            </p>
            <p className='font-family-dm-sans text-left text-[18px] w-[330px] text-primary font-medium'>
              AI Interview
            </p>
            <p className='font-family-dm-sans lg:text-[16px] text-[14px] mt-2 mb-4 text-text font-medium w-[300px]'>
              An intelligent interview preparation platform that uses AI to conduct simulated interviews,
              providing real-time feedback and performance analytics to help candidates excel.
            </p>
            <div className='flex  flex-col '>
              <Link
                href='https://github.com/aj4iiiii/ai-interview'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='text-left relative font-display w-[330px]'>
                  <Image
                    className='w-40 h-10 opacity-70 '
                    src={'/button.png'}
                    alt='button'
                    width={1220}
                    height={392}
                  />
                  <p className='absolute left-10 lg:left-5 lg:top-1 top-2 text-text lg:text-2xl'>
                    Github
                  </p>
                  <Image
                    className='max-w-[70px] hidden lg:block absolute -top-3 left-34'
                    src={'/github.svg'}
                    alt='github'
                    width={70}
                    height={55}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
