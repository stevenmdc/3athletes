import React from "react";

export function SocialIcons() {
  return (
    <div class="fixed bottom-0 left-6 z-50 flex flex-col">
      <ul className="wrapper">
        <li className="group relative m-[10px] inline-flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full bg-white p-[15px] shadow-md">
          <a href="#" target="_blank" aria-label="Facebook" title="Facebook">
            <svg
              className="transition hover:fill-neutral-700"
              width="24px"
              fill="#262626"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path>
            </svg>
          </a>
          <div className="group-hover:visibility-visible pointer-events-none absolute top-0 w-[150%] rounded bg-blue-500 px-2 py-1 text-center text-sm text-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-[-35px] group-hover:opacity-0">
            Facebook
            <div className="absolute bottom-[-1.5] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-blue-500 transition-all duration-300 ease-in-out"></div>
          </div>
        </li>
        <li className="group relative m-[10px] inline-flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full bg-white p-[15px] shadow-md">
          <a href="#" target="_blank" aria-label="Instagram" title="Instagram">
            <svg
              className=" hover:fill-neutral-700"
              width="24px"
              fill="#262626"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path>
            </svg>
          </a>
          <div className="pointer-events-none absolute top-0 w-[150%] rounded bg-black px-1 py-1 text-center text-sm text-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-[-35px] group-hover:opacity-0">
            Instagram
          </div>
        </li>
        <li className="group relative m-[10px] inline-flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full bg-white p-[15px] shadow-md">
          <a href="#" target="_blank" aria-label="Strava" title="Strava">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 58.435"
              width="24px"
              fill="#262626"
              height="24px"
            >
              <g
                xmlns="http://www.w3.org/2000/svg"
                clip-path="url(#clip0_1059_3547)"
              >
                <path
                  fill="#F9A77F"
                  d="m29.27 43.568-5.117-10.083-7.625.013 12.743 24.937L42 33.485h-7.625z"
                />
                <path
                  fill="#FC5200"
                  d="m17.181 19.947 6.972 13.538h10.223L17.18 0 0 33.485h10.236z"
                />
              </g>
            </svg>
          </a>
          <div className="pointer-events-none absolute top-0 w-[150%] rounded bg-black px-1 py-1 text-center text-sm text-white opacity-0 shadow-md transition-all duration-300 group-hover:pointer-events-auto group-hover:top-[-35px] group-hover:opacity-0">
            Strava
          </div>
        </li>
      </ul>
    </div>
  );
}
