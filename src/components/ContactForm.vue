<template>
  <div>
    <h2 class="mt-5 text-3xl text-green-500">
      Contact Form
    </h2>

    <form
      name="ask-question"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="form-name"
        value="ask-question"
      >
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="name"
              class="block text-sm font-medium text-gray-700"
            >Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="John Smith"
            >
          </div>

          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="email"
              class="block text-sm font-medium text-gray-700"
            >Your Email Address</label>
            <input
              id="email"
              type="text"
              name="email"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="john.smith@gmail.com"
            >
          </div>

          <div class="p-2 max-w-2xl mx-auto">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter your message here"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-6 bg-gray-50 sm:px-6">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

  methods: {
    validate() {
      //
    },
  },
};
</script>
