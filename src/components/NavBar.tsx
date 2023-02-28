"use client"
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function NavBar() {
  return (
    <nav className="bg-primary p-2 flex justify-between">
      <Link href="/" className="text-black-200 text-2xl">
        LettuceBe{" "}
      </Link>
      <div>
        <div className="flex gap-4">
          <MenuOutlinedIcon/>
          <FavoriteBorderIcon/>
          <AccountCircleOutlinedIcon/>
        </div>
      </div>
    </nav>
  )
}