<script setup>
import { Smartphone, ArrowUpRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section id="hero" class="overflow-hidden relative">
    <img src="@/assets/img/home/hero/background.jpg"
         alt="Background"
         class="absolute left-0 top-0 w-full h-full -z-3">
    <img src="@/assets/img/home/hero/background-pattern.svg"
         alt="Background pattern"
         class="absolute left-0 top-0 w-full h-full object-cover -z-2" />
    <div class="container">
      <div class="relative flex justify-between items-center flex-wrap h-full min-h-screen pt-20">
        <div class="relative max-w-xl z-1">
          <div class="flex flex-col items-start gap-10">
            <div class="flex flex-col gap-3 items-start">
              <Button data-aos="fade-down" as="h3" variant="labelSecondary" size="sm">
                <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
                100% TRUSTED PLATFORM
              </Button>
              <h1 data-aos="fade-down" data-aos-delay="100" class="font-integral text-5xl lg:text-6xl text-white">
                Finance with Security And <span class="text-[#E2FF54]">Flexibility</span>
              </h1>
              <p data-aos="fade-down" data-aos-delay="200" class="leading-[150%] text-[#DCDCDC] capitalize max-w-md">
                no-fee checking account with cash back rewards. Enjoy fee-free banking and earn cash back on your everyday purchases.
              </p>
            </div>
            <Button :side-icon="ArrowUpRight" as="a" href="#" data-aos="fade-down" data-aos-delay="300">
              Open Account
            </Button>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="200" class="absolute right-0 transform -translate-x-1/3 translate-y-1/4 md:translate-y-0 lg:relative transition group scale-70 md:scale-80 xl:scale-100">
          <div class="transition-opacity opacity-60 md:opacity-100">
            <img src="@/assets/img/home/hero/credit-card.svg"
                 alt="Banking card"
                 class="absolute left-0 bottom-0 transform transition duration-400 ease-out -translate-x-1/5 group-hover:-translate-x-1/2 group-hover:-rotate-12 group-hover:-translate-y-1/3 z-3">
            <img src="@/assets/img/home/hero/phone.svg"
                 alt="Phone"
                 class="relative group-hover:-translate-y-2 transition duration-400 ease-out z-1">
            <div class="absolute top-3/5 right-0 transform transition duration-400 translate-x-1/3 group-hover:translate-x-2/3 group-hover:rotate-z-12 -rotate-z-5 text-2xl font-medium">
              <div class="absolute rounded-2xl bg-[#E2FF54] p-8 z-1">
                <div class="bg-[#FDDB33] size-12 rounded-full flex items-center justify-center">
                  <Smartphone class="size-6"/>
                </div>
                <h4>One app for all</h4>
              </div>
              <div class="transform transition -translate-y-3 duration-400 group-hover:-translate-y-3/4 translate-x-3 rounded-2xl bg-[#29AD8D] p-8">
                <div class="bg-[#FDDB33] size-12 rounded-full flex items-center justify-center">
                  <Smartphone class="size-6"/>
                </div>
                <h4>One app for all</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
