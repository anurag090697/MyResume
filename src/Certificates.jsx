/** @format */
import certificate from "../public/geeksters.png";

function Certificates() {
  return (
    <div className='certificates'>
      <h1 className="text-center sm:text-start">My Certificates</h1>
      <div className='flex flex-col justify-center items-start gap-8'>
        <div>
          <img src={certificate} alt='' />
        </div>
      </div>
    </div>
  );
}
export default Certificates;
