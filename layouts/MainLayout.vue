<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      <ul
        class="flex justify-end items-center text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]"
      >
        <li
          class="border-r border-r-gray-400 px-3 hover:text-green-400 cursor-pointer"
        >
          Sell On Our Website
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-green-400 cursor-pointer"
        >
          Cookie Preferences
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-green-400 cursor-pointer"
        >
          Help
        </li>
        <li
          class="border-r border-r-gray-400 px-3 hover:text-green-400 cursor-pointer"
        >
          Buyer Protection
        </li>
        <li
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
          class="relative"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
