import * as http from "http";
import {Inter} from "next/font/google";
import Link from "next/link";
import assert from "node:assert";
import LoginBtn from './login-btn'

assert(process.env.TEST_USER_ID);
const url = `http://localhost:3000/users/${process.env.TEST_USER_ID}`;

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
      <main className="m-8 items-center">
        <Link href={url}>Click to see test user shelf</Link>
        <br/>
        <Link href={'http://localhost:3000/products'}>Click to see products (from which users will be able to add)</Link>
      <div>
  <img className="w-full mr-[5%] mb-[5%]" src="https://s3-alpha-sig.figma.com/img/bb39/ce58/6e77420ca063128071b88cde39415cf7?Expires=1678665600&Signature=PKi19ZZU62FGG74N0Wg2bctVx2GujIesTga~l1hSOkJLow~sNE03DooNjaDtL7t3PmXXAUgdk91cud7LaYTJuVoyc-0uwrbN76riQi7O5vNV6zhFm2-3Q4ucAtLunNCKc2FD5R2t-t77bgSfU0Fl3WJfxYMtRPYk0MzJFwdJu2rRLgUm3KpO0AMaapYwwhsKxzbWCVoJdPxLTWeE3p5Wrf3XHQKff1x8YEIrgyzWo3JCqqZ8~gzUh6XRCQB7Gv6sVP9R9lFsfSizHINMTlkqWUSvxsqqhvRgyqP157PjGkx2EV5gEAte-HOBQMEm0ZtuEMX675I22gFASzNlze3Z6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
      <div className="text-center mb-3 p-6">
        <h1>OUR MISSION</h1>
        <p>To make sure ingredients at home get consumed, not wasted. Lettuce help you reduce your food waste, without judgement! </p>
      </div>
      <div className="mt-3 p-6 grid grid-cols-3 text-center">
        <div><img className="p-4 w-[80%]" src="https://cdn-icons-png.flaticon.com/512/1028/1028911.png" alt="checklist"/></div>
        <div><img className="p-4 w-[80%]" src="https://www.citypng.com/public/uploads/preview/download-flat-red-like-heart-icon-silhouette-png-31634946150lzhnuccixd.png" alt="checklist"/></div>
        <div><img className="p-4 w-[80%]" src="https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/History_clock_time_clear_url_watch_hourglass.png" alt="checklist"/></div>
        <div>Input your ingredients into LettuceBe</div>
        <div>Save your frequently used items</div>
        <div>See when your ingredients are about to expire</div>
      </div>
      <div className="p-4 grid grid-cols-1 place-content-center w-full">
        <LoginBtn className="border rounded content-center px-[10%] drop-shadow-lg">{/* SignUp */}Sign up</LoginBtn>
      </div>
      </main>
  );
}
