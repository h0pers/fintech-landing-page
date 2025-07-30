<script setup>
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-vue-next'
import social_accounts_list from '@/components/footer/social_accounts.js'
import { ref } from 'vue'

const socialAccounts = ref(social_accounts_list)

</script>

<template>
  <footer id="footer">
    <div class="container">
      <div data-aos="fade-up" data-aos-delay="1000" class="grid grid-cols-1 lg:grid-cols-2 items-center relative rounded-[20px] px-10 lg:px-20 pt-10 overflow-hidden mb-[120px]">
        <img src="@/assets/img/footer/background.svg" alt="Background" class="absolute left-0 top-0 w-full h-full object-cover -z-1">
        <div class="space-y-10 max-w-2xl">
          <div class="space-y-3">
            <h2 class="text-4xl sm:text-5xl lg:text-5xl text-white font-integral uppercase leading-[150%]">Are you ready to start?</h2>
            <p class="leading-[150%] text-white max-w-xl">
              Personalize your settings, follow your progress, archive your highlights and notes automatically Glose is the ultimate reading
            </p>
          </div>
          <Button as="a" href="#" :side-icon="ArrowUpRight">Get Started</Button>
        </div>
        <div class="group flex justify-end opacity-60 lg:opacity-100">
          <div class="relative">
            <img src="@/assets/img/footer/phone-qr-code.svg" alt="QR code on phone" class="z-1 absolute left-0 bottom-0 transform -run translate-x-1/2 sm:-translate-x-1/2">
            <img src="@/assets/img/footer/phone.svg" alt="Phone" class="">
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center text-center">
        <div class="flex flex-col items-center gap-4 mb-5">
          <a href="#">
            <img src="@/assets/icons/logo-dark.svg" alt="Logo">
          </a>
          <div class="flex gap-5">
            <a href="#">
              <img src="@/assets/icons/app-store-download.svg" alt="App Store download">
            </a>
            <a href="#">
              <img src="@/assets/icons/google-play-download.svg" alt="Google Play download">
            </a>
          </div>
        </div>
        <div class="mb-10">
          <ul class="flex flex-wrap gap-x-[48px] gap-y-2.5 justify-center text-[#646161]">
            <li><a href="#">Personal Loan</a></li>
            <li><a href="#">One Card</a></li>
            <li><a href="#">Savings</a></li>
            <li><a href="#">Checking</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="space-y-4 mb-5">
          <ul class="flex justify-center gap-3">
            <li v-for="(item, number) in socialAccounts" :key="number">
              <a :href="item.link" class="flex justify-center items-center size-8 bg-[#006022] rounded-full"><img :src="item.icon" :alt="item.alt"></a>
            </li>
          </ul>
          <div>
            <a href="mailto:moc.edargpu@tcatnoc" class="text-sm"><span class="font-semibold">Send Your Feedback:</span> moc.edargpu@tcatnoc</a>
          </div>
        </div>
        <div class="mb-5">
          <ul class="flex flex-wrap justify-center gap-2.5 leading-[150%] text-[#646060]">
            <li><a href="#">Privacy Policy</a></li>
            <li>|</li>
            <li><a href="#">Terms & Condition</a></li>
            <li>|</li>
            <li><a href="#">Cookie Notice</a></li>
            <li>|</li>
            <li><a href="#">Copyright Policy</a></li>
            <li>|</li>
            <li><a href="#">Data Policy</a></li>
          </ul>
        </div>
        <span class="leading-[150%] text-[#646060]">© 2024 Design Monks. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
