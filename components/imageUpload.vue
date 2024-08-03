<template>
    <div>
      <form @submit.prevent="uploadImage">
        <input type="file" @change="onFileChange" />
        <button type="submit">Upload</button>
      </form>
      <img v-if="selectedFile" :src="previewUrl" alt="Selected Image Preview" />
      <p v-if="imageUrl">{{ imageUrl }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFile: null,
        previewUrl: '',
        imageUrl: '', // State to hold the URL of the uploaded image
      };
    },
    methods: {
      onFileChange(e) {
        this.selectedFile = e.target.files[0];
        if (!this.selectedFile) {
          this.previewUrl = '';
          return;
        }
        // Create a temporary URL for previewing the selected file
        this.previewUrl = URL.createObjectURL(this.selectedFile);
      },
      async uploadImage() {
        if (!this.selectedFile) {
          alert('ファイルを選択してください');
          return;
        }
        const formData = new FormData();
        formData.append('image', this.selectedFile);
  
        try {
          const response = await this.$axios.post('/api/upload-image', formData);
          this.imageUrl = response.data.imageUrl; // Assuming the server returns the image URL
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  <style>
  img{
    max-width: 100%;
    margin-bottom: 10px;
  }


  </style>