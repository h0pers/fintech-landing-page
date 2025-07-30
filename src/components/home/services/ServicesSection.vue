<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Plus } from 'lucide-vue-next'
</script>

<template>
  <section id="services" class="overflow-hidden">
    <div class="container">
      <div data-aos="fade-in" class="max-w-3xl sm:text-center mx-auto mb-15 space-y-4">
        <Button as="h3" variant="label" size="sm">
          <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
          Services
        </Button>
        <h2 class="uppercase font-integral leading-[120%] text-4xl sm:text-5xl">Can Help You Achieve Financial Success</h2>
      </div>
      <div class="space-y-6">
        <div data-aos="fade-up" class="grid grid-cols-1 lg:grid-cols-2 items-center bg-[#F6F9F8] border border-black/6 rounded-[20px] px-10 pt-10 pb-10 lg:pb-0">
          <img src="@/assets/img/services/phone.svg" alt="Phone" class="order-1 lg:order-0 transform translate-0 lg:translate-x-10 scale-75 lg:scale-100">
          <div class="max-w-md space-y-3">
            <img src="@/assets/icons/world-currency.svg" alt="World currency">
            <h3 class="text-2xl sm:text-[32px] leading-[120%] font-helvetica">Transfers across the globe are free</h3>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div data-aos="fade-up" class="flex flex-col justify-between items-start lg:items-center space-y-10 px-10 pt-10 bg-[#F6F9F8] border border-black/6 rounded-[20px]">
            <div class="space-y-3">
              <img src="@/assets/icons/stats-up.svg" alt="Stats up">
              <h3 class="font-helvetica text-2xl sm:text-[32px] leading-[120%]">Create A Card That Is Unique And Customized</h3>
              <p class="text-[#676666] leading-[150%] capitalize">
                we offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include High-Yield Savings Accounts.
              </p>
            </div>
            <div>
              <img src="@/assets/img/services/charts.svg" alt="Charts">
            </div>
          </div>
          <div data-aos="fade-up" class="flex flex-col justify-between items-start bg-[#001027] border border-black/6 rounded-[20px] px-10 pt-10 space-y-10">
            <div class="space-y-3">
              <img src="@/assets/icons/maintenance.svg" alt="Maintenance">
              <h3 class="text-2xl sm:text-[32px] text-white font-helvetica leading-[120%]">Personalized Insights And Financial Goals</h3>
              <p class="text-[#A7A7A7] leading-[150%] capitalize">
                savings accounts that offer competitive interest rates and flexible deposit options. Investment Invest wisely with our personalized.Our services include High-Yield Savings
              </p>
            </div>
            <div class="relative">
              <img src="@/assets/img/services/balance.svg" alt="Balance">
              <div class="space-y-2 absolute border border-black/6 rounded-2xl right-0 top-1/2 transform -translate-y-1/2 translate-x-7 sm:translate-x-3/4 bg-[#FFFEFE] px-[37px] py-[23px] shadow-2xl">
                <div>
                  <h4 class="font-medium text-[#A5A5A5]">Total balance</h4>
                  <h5 class="font-medium text-[#0D0D0D] text-2xl">$9,647.00</h5>
                </div>
                <button class="flex gap-2 text-xs">
                  <span class="flex items-center justify-center rounded-full bg-[#0CCA08] size-[17px]">
                    <Plus class="size-[14px] text-white"/>
                  </span>
                  Add numbers
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div data-aos="fade-up" class="transition-colors bg-[#E2FF54]  p-10 border border-black/6 rounded-[20px] space-y-4">
            <h3 class="font-helvetica text-2xl sm:text-[32px] leading-[120%]"><span class="text-4xl sm:text-4xl">100%</span> Dedication</h3>
            <p class="leading-[150%] text-[#403F3F] capitalize">
              we offer a comprehensive range of innovative financial services tailored to meet your needs.
            </p>
          </div>
          <div data-aos="fade-up" class="relative overflow-hidden bg-[#F6F9F8] p-10 rounded-[20px] border border-black/6 h-full">
            <div class="relative z-1 space-y-3">
              <img src="@/assets/icons/currency.svg" alt="Currency">
              <h3 class="capitalize font-helvetica text-2xl sm:text-[32px] leading-[120%]">Hold money in <br> 30+ currencies</h3>
            </div>
            <img src="@/assets/img/services/application.svg" alt="Application" class="absolute right-0 bottom-0 transition-transform">
          </div>
          <div data-aos="fade-up" class="relative flex justify-center items-center transition-colors bg-[#2D907A] hover:bg-[#217865] p-10 rounded-[20px] text-center">
            <a href="#" class="absolute left-0 top-0 w-full h-full z-1"></a>
            <span class="capitalize text-2xl sm:text-[32px] font-helvetica text-white leading-[120%]">Visit Our Services page</span>
          </div>
        </div>
        <div class="text-center">
          <Button as="a" href="#" data-aos="fade-in" variant="outline" :side-icon="ArrowUpRight">View More</Button>
        </div>
      </div>
    </div>
  </section>
</template>
