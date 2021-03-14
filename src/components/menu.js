import React from 'react';

const Menu = () => {
    return (
        <div class="group inline-block relative">
        <button
          class="font-semibold inline-flex items-center"
        >
          <span class="mr-1">Menu</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="absolute hidden pt-1 group-hover:block">
          <li class="">
            <a
              class="rounded-t bg-yellow-100 hover:bg-yellow-200 py-2 px-4 block whitespace-no-wrap"
              href="/"
              >Home</a>
          </li>
          <li class="">
            <a
              class="bg-yellow-100 hover:bg-yellow-200 py-2 px-4 block whitespace-no-wrap"
              href="/choco"
              >Choco</a>
          </li>
          <li class="">
            <a
              class="bg-yellow-100 hover:bg-yellow-200 py-2 px-4 block whitespace-no-wrap"
              href="/shiroyuki"
              >Shiroyuki</a>
          </li>
          <li class="">
            <a
              class="bg-yellow-100 hover:bg-yellow-200 py-2 px-4 block whitespace-no-wrap"
              href="/kin"
              >Kin</a>
          </li>
          <li class="">
            <a
              class="rounded-b bg-yellow-100 hover:bg-yellow-200 py-2 px-4 block whitespace-no-wrap"
              href="/personal"
              >Personal Site</a>
          </li>
        </ul>
      </div>
    )}

export default Menu;