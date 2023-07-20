<template>
	<div class="slider-bg">
		<div class="n-container">
			<div class="slider-box">

				<b-container class="content"><b-row>
						<!--Logo Section -->
						<b-col xl="8" lg="7" md="12" sm="12" class="left">
							<div class="logo">
								<img src="../assets/logo.png" />
							</div>
							<div class="info-section">
								<font-awesome-icon icon="fa-solid fa-user-secret" />
								<i class="fa-regular fa-user"></i>
								<span> Merhaba, Ben Ahmet DEMİROK.</span>
								<div class="title">
									Frontend <strong>Developer</strong>
								</div>
								<div class="skills">
									Vue js - Nuxt Js - Vuetify - Quasar - NaivyUI -
									Bootstrap Vue
								</div>
								<div class="">
									<MenuSection />
								</div>
							</div>
						</b-col>
						<b-col xl="4" lg="5" md="12" sm="12">
							<div class="user-section">
								<div class="user-box">
									<img src="../assets/user-bg1.png" />
								</div>
								<img src="../assets/ahmet.jpg" />
								<div class="user-info">
									<p>Ahmet DEMİROK</p>
									<span>Frontend Developer</span>
									<div class="social-section">
										<font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
										<font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
										<font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
										<font-awesome-icon class="icon" icon="fa-brands fa-github" />
									</div>
									<div class="user-section-footer">
										<h3>
											CV İndir
											<font-awesome-icon class="icon2" icon="fa-solid fa-download" />
										</h3>
										<h3>
											İletişime Geç
											<font-awesome-icon class="icon2" icon="fa-solid fa-signature" />
										</h3>
									</div>
								</div>
							</div>

						</b-col>

					</b-row></b-container>



			</div>
		</div>
	</div>
</template>

<script setup>
import MenuSection from './MenuComponents.vue';

import { ref } from 'vue';
</script>

<style scoped>
.user-section-footer {
	height: 24px;
	padding-top: 10px;
	border-top: 1px solid #3c3c45;
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	justify-content: space-between;
}

.user-section-footer h3 {
	color: #d0d0d2;
	font-size: 0.8rem;
	font-weight: 400;
	padding: 7px;
}

.user-section-footer h3:first-child {
	border-right: 1px solid #3c3c45;
	width: 45%;
	height: 20px;
}

.social-section {
	text-align: center;
}

.user-section {
	width: 90%;
	height: 220px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	padding: 10px;
}

.icon {
	color: whitesmoke;
	font-size: 20px;
	margin-right: 5px;
	margin-left: 5px;
}

.icon2 {
	color: whitesmoke;
	font-size: 15px;
	margin-right: 5px;
	margin-left: 5px;
}

.user-box {
	height: 250px;
}

.user-box img {
	height: 250px;
	width: 100%;
	object-fit: cover;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
}

.user-section>img {
	height: 150px;
	width: 150px;
	object-fit: cover;
	border-radius: 50%;
	margin-top: -75px;
	margin-left: auto;
	position: relative;
	display: block;
	margin-right: auto;
	padding: 2px;
	border: 3px dotted rgb(151, 148, 148);
}

.info-section {
	margin-top: 70px;
}

.info-section span {
	color: white;
	font-size: 1.5rem;
	margin-top: 10px;
}

.user-info {
	background-color: #34353a;
	margin-top: -85px;
	min-height: 150px;
	padding: 20px;
	padding-top: 100px;
}

.user-info p {
	font-size: 1.4rem;
	display: block;
	text-align: center;
	color: white;
	font-weight: 600;
}

.user-info span {
	font-size: 0.8rem;

	display: block;
	text-align: center;
	color: #ffb324;
}

.title {
	color: rgb(233, 228, 228);
	font-size: 3.5rem;
	margin-top: 10px;
	font-weight: 900;
}

.title strong {
	color: #b62652;
	font-size: 3.5rem;
	margin-top: 10px;
	font-weight: 900;
	margin-left: 10px;
}

.skills {
	color: rgb(237, 238, 237);
	font-size: 1rem;
	margin-top: 5px;
}

.slider-box {
	margin-top: 40px;
}

.slider-bg {
	background-color: var(--mainColor2);
	height: 100vh;
	padding: 20px;
	overflow: hidden;
	background-image: url('../assets/slider2.jpg');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

.light-green {
	height: 108px;
	background-color: rgba(0, 128, 0, 0.72);
}

.red {
	height: 108px;
	background-color: rgba(223, 63, 14, 0.72);
	display: flex;
	align-items: center;
	justify-content: center;
}

.green {
	background-color: rgba(0, 128, 0, 1.24);
}

@media (max-width: 1260px) {
	.user-section {
	width: 98%;

}
}
@media (max-width: 960px) {
	html {
		font-size: 10px !important;
	}

	.user-section {
		width: 80%;
		height: 220px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
	}

}
</style>
