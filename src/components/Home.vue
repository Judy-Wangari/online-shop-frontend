<script setup>
import{ref} from 'vue'

</script>

<template>
    <v-img  src="z4.jpg" height="350"  cover    class="mb-6 "> </v-img>
  <v-container>
    <v-row size="4" >
                    <v-col class="d-flex flex-column align-center">
                        <v-card class="mt-6 d-flex align-center justify-center" 
                                style="border-radius: 50%; width: 120px; height: 120px;">
                            <v-icon color="#0097A7" icon="mdi-truck" size="x-large"></v-icon>
                        </v-card>
                        <p class="mt-2 font-weight-bold">FREE DELIVERY</p>
                        <p class="font-weight-light mt-0">Within a radius of 20km</p>
                  </v-col>
                        <v-col class="d-flex flex-column align-center">
                                <v-card class="mt-6 d-flex align-center justify-center" 
                                        style="border-radius: 50%; width: 120px; height: 120px;">
                                    <v-icon color="#0097A7" icon="mdi-headphones" size="x-large"></v-icon>
                                </v-card>
                                <p class="mt-2 font-weight-bold">7/24 SUPPORT</p>
                                <p class="font-weight-light mt-0">Dedicated Support</p>
                        </v-col>
                            <v-col class="d-flex flex-column align-center">
                                    <v-card class="mt-6 d-flex align-center justify-center" 
                                            style="border-radius: 50%; width: 120px; height: 120px;">
                                        <v-icon color="#0097A7" icon="mdi-package-variant" size="x-large"></v-icon>
                                    </v-card>
                                    <p class="mt-2 font-weight-bold">EASY AND FAST RETURN</p>
                                    <p class="font-weight-light mt-0">Shop with confidence</p>
                            </v-col>
                                <v-col class="d-flex flex-column align-center">
                                        <v-card class="mt-6 d-flex align-center justify-center" 
                                                style="border-radius: 50%; width: 120px; height: 120px;">
                                            <v-icon color="#0097A7" icon="mdi-cash-check" size="x-large"></v-icon>
                                        </v-card>
                                        <p class="mt-2 font-weight-bold">SECURE PAYMENT</p>
                                        <p class="font-weight-light mt-0">100% secure payment</p>
                                </v-col>
                </v-row>

                <!-- Categories -->
                
             <v-card class="pa-4 mb-6" color="#F5F0E8">
                 <div>
                    <h1 style="text-align: center;">Categories</h1>
                 </div>
                <v-row size="6" >
                    <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="j1.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Jacket</p>
                  </v-col>
                    <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="e1.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Jeans</p>
                    </v-col>
                     <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="t1.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Tops</p>
                    </v-col>
                     <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="z3.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Knitted sweaters</p>
                    </v-col>
                     <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="t2.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Designer</p>
                    </v-col>
                     <v-col class="d-flex flex-column align-center">
                        <v-avatar size="120" class="mt-6">
                            <v-img src="z5.jpg" cover></v-img>
                        </v-avatar>
                        <p class="mt-2 font-weight-bold">Material</p>
                     </v-col>
            </v-row>
         </v-card>
                

         <!-- Most Popular -->
          <v-card class="pa-4 mb-6 " >
                 <div>
                    <h1 style="text-align: center;">Most Popular</h1>
                 </div>
            <v-row >
                <v-col md="3">
                    <v-card class="pa-6">
                        <v-img src="e1.jpg" height="200" contain></v-img>
                        <v-card-title>Y2K Flared Jeans</v-card-title>
                        <v-card-text>Black, Cotton </v-card-text>
                        <v-btn color="secondary"> Buy</v-btn>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card class="pa-6">
                        <v-img src="t3.jpg" height="200" contain></v-img>
                        <v-card-title>Small Tops</v-card-title>
                        <v-card-text>Cotton </v-card-text>
                        <v-btn color="secondary"> Buy</v-btn>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card class="pa-6">
                        <v-img src="j4.jpg" height="200" contain></v-img>
                        <v-card-title>Cropped leather jacket</v-card-title>
                        <v-card-text>Brown, Leather </v-card-text>
                        <v-btn color="secondary"> Buy</v-btn>
                    </v-card>
                </v-col>
                <v-col md="3">
                    <v-card class="pa-6">
                        <v-img src="z1.jpg" height="200" contain></v-img>
                        <v-card-title>Tank Tops</v-card-title>
                        <v-card-text>Cotton </v-card-text>
                        <v-btn color="secondary"> Buy</v-btn>
                    </v-card>
                </v-col>
                </v-row>
            </v-card>

            <div class="text-center"> 
                
                <p class="mt-2 font-weight-bold " style="font-size: 24px;"> GET 10% OFF YOUR FIRST ORDER</p>
                <p class="font-weight-light mt-0" style="font-size: 20px;">Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</p>
            </div>

            <!--Contact Us-->
       
    </v-container>
 
 <!--Contact Us-->
    <v-container max-width="100%" style="background-color:  #0097A7; border: 1px solid black ;" >
        <v-row class="text-center" style="color: white;" >
            
            <div  class="text-title-large font-weight-light">0712 345 678 | shoply@gmail.com</div>
           
            <div  class="text-title-large font-weight-light ml-16 " >&copy; 2026 Shoply</div>
        </v-row>
    </v-container>
</template>