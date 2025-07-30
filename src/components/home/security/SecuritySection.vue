<script setup>
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="security" class="h-full min-h-screen relative flex items-center overflow-hidden">
    <img src="@/assets/img/security/background.jpg" alt="Background" class="absolute left-0 top-0 w-full h-full -z-1" />
    <div class="container">
      <div data-aos="fade-in" class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="group absolute lg:relative opacity-60 lg:opacity-100 transform translate-y-1/2 lg:translate-none">
          <img src="@/assets/img/security/phone.svg" alt="Phone" class="group-hover:scale-102  transform group-hover:rotate-1 transition-transform">
          <img src="@/assets/img/security/card.svg" alt="Card" class="absolute right-0 bottom-0 transform -translate-x-40 transition-transform -translate-y-10 group-hover:rotate-12 group-hover:-translate-y-40">
        </div>
        <div class="space-y-10 z-1">
          <div class="space-y-4">
            <Button as="h3" variant="labelSecondary" size="sm">
              <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
              trustworthiness
            </Button>
            <h2 class="text-4xl sm:text-5xl text-white font-integral leading-[120%]">We value your trust and security</h2>
            <p class="text-[#DBDBDB] leading-[150%]">
              Our mission is to make finance more accessible, transparent, and secure for everyone. With cutting.
            </p>
          </div>
          <Button :side-icon="ArrowUpRight">Get Started</Button>
        </div>
      </div>
    </div>
  </section>
</template>
