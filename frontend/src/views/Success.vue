<template>
    <div>
        <h1 style="font-size:38px;">Thank you!</h1>
        <p style="font-size:22px; margin:50px;">This is a simple example of e-commerce website. Although I appearance you for submitting the
            the order form, no real purchasing has been made and no sensitive data has been saved.
        </p>
    </div>
</template>

<script>
    export default {
       name: "Success",
       mounted() {
           document.title = "Success"
       } 
    }
</script>