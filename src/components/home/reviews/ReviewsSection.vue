<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-vue-next'
import { Review, reviews } from '@/components/home/reviews'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const items = ref(reviews)

</script>

<template>
  <section id="reviews" class="bg-[#F6F9F8]">
    <div class="container">
      <div class="space-y-15">
        <div data-aos="fade-in" class="space-y-4 sm:text-center">
          <Button as="h3" variant="label" size="sm">
            <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
            Testimonial
          </Button>
          <h2 class="font-integral text-4xl sm:text-5xl leading-[120%] uppercase">Get to Know Our Clients</h2>
        </div>
        <div data-aos="fade-in"  class="space-y-10">
          <div>
            <Carousel class="overflow-hidden">
              <CarouselContent>
                <CarouselItem v-for="(review, number) in items" :key="number" class="md:basis-1/2 lg:basis-1/3">
                  <Review :body="review.body"
                          :full-name="review.fullName"
                          :variant="review.variant"
                          :avatar="review.avatar"
                          :position="review.position"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div class="text-center">
            <Button as="a" href="#" variant="outline" :side-icon="ArrowUpRight">View More</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
