  document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    if (fileInput.files.length === 0) {
      messageDiv.textContent = 'Please select a file.';
      messageDiv.className = 'text-red-500';
      return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
      const response = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
        messageDiv.textContent = 'File uploaded successfully!';
        messageDiv.className = 'text-green-600';
      } else {
        messageDiv.textContent = `Error: ${result.message || 'Upload failed.'}`;
        messageDiv.className = 'text-red-500';
      }
    } catch (error) {
      messageDiv.textContent = 'An error occurred during upload.';
      messageDiv.className = 'text-red-500';
      console.error(error);
    }
  });
