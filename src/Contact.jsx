/** @format */

function Contact() {
  return (
      <div className='contact'>
          <h1>Contact:</h1>
      <div>
        <h2>Email:</h2>
        <p>anurag090697@gmail.com</p>
      </div>
      <div>
        <h2>Socials:</h2>
        <div className='flex w-full items-center justify-center gap-6'>
          <a href=''>
            <img
              src='https://oktayshakirov.com/assets/images/socials/github.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://oktayshakirov.com/assets/images/socials/linkedin.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://oktayshakirov.com/assets/images/socials/instagram.png'
              alt=''
            />
          </a>
          <a href=''>
            <img
              src='https://oktayshakirov.com/assets/images/socials/twitter.png'
              alt=''
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center align-center flex-col gap-8">
        <h2>Support My Work:</h2>
        <p>
          With every small donation, you contribute to hostings, domains and
          other essential costs. All my work which is made public on GitHub or
          Figma is open source and free for everyone to use.
        </p>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/paypalme.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/github-sponsors.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
        <a href=''>
          <img
            src='https://oktayshakirov.com/assets/images/coffee-sponsort.png'
            alt=''
            className='w-60 rounded-2xl'
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
