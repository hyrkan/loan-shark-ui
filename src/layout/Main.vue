<script setup>
import AppHeader from '../components/dashboard_components/AppHeader.vue'
import AppNavigation from '../components/dashboard_components/AppNavigation.vue'	
import SearchModal from '../components/dashboard_components/SearchModal.vue'
</script>

<template>
	<!--wrapper-->
	<div class="wrapper">
		<!--start header wrapper-->
		<div class="header-wrapper">
			<AppHeader />
			<!--navigation-->
			<AppNavigation />
			<!--end navigation-->
		</div>
		<!--end header wrapper-->

		<!--start page wrapper -->
		<div class="page-wrapper">
			<div class="page-content">
				
				<router-view />
				
			</div>
		</div>
		<!--end page wrapper -->

		<SearchModal />

		<!--start overlay-->
		<div class="overlay toggle-icon"></div>
		<!--end overlay-->
		<!--Start Back To Top Button-->
		<a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
		<!--End Back To Top Button-->
		<footer class="page-footer">
			<p class="mb-0">Copyright © 2023. All right reserved.</p>
		</footer>
	</div>
	<!--end wrapper-->
</template>

<style scoped></style>
