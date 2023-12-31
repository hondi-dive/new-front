'use client';

import Link from 'next/link';

import HomeIcon from '@/assets/icons/home.svg';
import MyIcon from '@/assets/icons/my.svg';
import WriteIcon from '@/assets/icons/write.svg';
import ListIcon from '@/assets/icons/list.svg';
import ActiveHomeIcon from '@/assets/icons/active_home.svg';
import ActiveMyIcon from '@/assets/icons/active_my.svg';
import ActiveListIcon from '@/assets/icons/active_list.svg';
import { usePathname } from 'next/navigation';
import path from 'path';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div
      className="w-full h-20 px-11 flex bg-white justify-between py-3  bottom-0 z-10 fixed max-w-[393px]"
      style={{ boxShadow: '0px -5px 5px -5px rgba(0,0,0,0.3)' }}
    >
      <Link
        href="/log"
        className="absolute left-[83%] bg-[#426BFF] rounded-[50%] w-[70px] h-[70px] inline-flex justify-center items-center top-0"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <WriteIcon />
      </Link>
      <Link href="/home">{pathname === '/home' ? <ActiveHomeIcon /> : <HomeIcon />}</Link>
      <Link href="/feeds">{pathname === '/feeds' ? <ActiveListIcon /> : <ListIcon />}</Link>
      <Link href="/my">{pathname === '/my' ? <ActiveMyIcon /> : <MyIcon />}</Link>
      <div className="h-8 w-8" />
    </div>
  );
}
