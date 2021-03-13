<template>
    <div class="header" style="background-color:black;">
        <h1 style="color:white;">kurimaru</h1>
        <router-link v-bind:to="{name: 'article.create'}">
        <button class="btn btn-success">ADD</button>
        </router-link>

    </div>
 </template>
 
 <script>
     export default {}
 </script>