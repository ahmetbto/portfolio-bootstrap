
<template>
	<div class="menu">


        <div class="box" @click="menuNumber(1)">
            <font-awesome-icon class="icon" icon="fa-solid fa-address-card" />
            <span class="icon-title">HAKKIMDA</span>
        </div>

		<div class="box" @click="menuNumber(2)">
			<font-awesome-icon class="icon" icon="fa-solid fa-file" />
			<span class="icon-title">ÖZGEÇMİŞ</span>
		</div>
		<div class="box" @click="menuNumber(3)">
			<font-awesome-icon class="icon" icon="fa-solid fa-star-half-stroke" />
			<span class="icon-title">YETKİNLİKLER</span>
		</div>
		<div class="box" @click="menuNumber(4)">
			<div class="box" >
			<font-awesome-icon class="icon" icon="fa-solid fa-briefcase" />
			<span class="icon-title">PROJELER</span>
		</div>
		</div>
		<div class="box" @click="menuNumber(5)">
			<div class="box" >
			<font-awesome-icon class="icon" icon="fa-solid fa-phone-volume" />
			<span class="icon-title">İLETİŞİM</span>
		</div>
	</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useStore } from 'vuex';
//import { key } from '../store/index';
const store = useStore();
//const isTitle1 = ref('0');




const menuNumber =(k:number)  =>{
	store.commit('changeMenuNUmber',k)
};
</script>

<style scoped>
.menu {
	margin-top: 150px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	transition: 0.6s;
}

.icon {
	color: white;
	font-size: 3rem;
	margin-left: auto;
		margin-right: auto;
	margin-top:auto;
	margin-bottom:auto;
}

.box {
	height: 90px;
	background-color: #b62652ed;
	margin-right: 7px;
	margin-left: 7px;
	display: block;
	border-radius: 7px;
	width: 110px;
	display: flex;
	flex-direction: row;
	transition: 0.6s all;
}

.icon-title {
	font-size: 1.1rem;
	color: white;
	margin-top: 5px;
	font-weight: 600;
	display: none;
	opacity: 0;
	transition: 0.6s;
	margin-left: 80px;
	padding-top: 25px;
	
}

.box:hover .icon-title {
	margin-left: 10px;
	display: block;
	opacity: 1;
	width: 150px;
}

.box:hover {
	width: 222px;
	cursor: pointer;
}
@media (max-width: 1250px) {
    .icon {
	font-size: 2,8rem;
	margin-left: auto;
		margin-right: auto;
	margin-top:auto;
	margin-bottom:auto;
}

.box {
	height: 6rem;
	width: 7rem;
	
}

.icon-title {
	font-size: 1.1rem;
	color: white;
	margin-top: 5px;
	font-weight: 600;
	display: none;
	opacity: 0;
	transition: 0.6s;
	margin-left: 80px;
	padding-top: 25px;
	width: 50px;
}
}



</style>
