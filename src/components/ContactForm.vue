<template>
  <div id="contact">
    <h2 class="mt-5 text-3xl text-green-500">
      Contact Form
    </h2>

    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit="validate"
    >
      <input
        type="hidden"
        name="form-name"
        value="contact-form"
      >
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 sm:p-6">
          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-500"
            >Your Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-500"
              placeholder="John Smith"
            >
          </div>

          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-500"
            >Your Email Address</label>
            <input
              id="email"
              v-model="email"
              type="text"
              name="email"
              class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-500"
              placeholder="john.smith@gmail.com"
            >
          </div>

          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-500"
            >Message</label>
            <textarea
              id="message"
              v-model="message"
              name="message"
              rows="3"
              class="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-500"
              placeholder="Enter your message here"
            />
          </div>

          <p
            v-for="(error, index) of errors"
            :key="index"
            class="dark:text-gray-500"
          >
            {{ error }}
          </p>
        </div>
      </div>
      <div class="px-4 py-6 bg-gray-50 sm:px-6 dark:bg-black">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-green-700 dark:text-gray-500 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactForm',

  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: [],
    };
  },

  methods: {
    validate(e) {
      this.errors = [];

      // Check name
      if (this.name === '') {
        this.errors.push('Name is missing, please enter your full name');
      }

      // Check email
      if (this.email === '') {
        this.errors.push('Email is missing, please enter your email');
      } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
        this.errors.push('Email is invalid, please check your spelling');
      }

      // Check message
      if (this.message === '') {
        this.errors.push('Message is missing, please enter a message');
      }

      if (this.errors.length > 0) {
        e.preventDefault();
      }
    },
  },
};
</script>
