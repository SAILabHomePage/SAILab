document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  const imageUpload = document.getElementById('imageUpload');
  const imagePreview = document.getElementById('imagePreview');

  if (imageUpload && imagePreview) {
    const uploadPanel = document.getElementById('uploadPanel');

    const previewFiles = (files) => {
      imagePreview.innerHTML = '';
      const fileList = Array.from(files).slice(0, 9);

      if (fileList.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'preview-item';
        empty.textContent = 'No images selected yet.';
        imagePreview.appendChild(empty);
        return;
      }

      fileList.forEach((file) => {
        const reader = new FileReader();

        reader.onload = function (e) {
          const preview = document.createElement('div');
          preview.className = 'preview-item';

          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = file.name;

          preview.appendChild(img);
          imagePreview.appendChild(preview);
        };

        reader.readAsDataURL(file);
      });
    };

    imageUpload.addEventListener('change', function () {
      previewFiles(this.files);
    });

    if (uploadPanel) {
      ['dragenter', 'dragover'].forEach((eventName) => {
        uploadPanel.addEventListener(eventName, function (e) {
          e.preventDefault();
          e.stopPropagation();
          uploadPanel.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach((eventName) => {
        uploadPanel.addEventListener(eventName, function (e) {
          e.preventDefault();
          e.stopPropagation();
          uploadPanel.classList.remove('drag-over');
        });
      });

      uploadPanel.addEventListener('drop', function (e) {
        const files = e.dataTransfer.files;
        if (files && files.length) {
          imageUpload.files = files;
          previewFiles(files);
        }
      });
    }
  }

  const topicTabs = document.querySelectorAll('.topic-tab');
  const topicPanels = document.querySelectorAll('.topic-panel');
  const topicDefaultPanel = document.querySelector('.topic-default-panel');

  function activateTopic(topic) {
    if (!topicTabs.length || !topicPanels.length) return;

    const hasTopic = Boolean(topic);

    topicTabs.forEach((tab) => {
      tab.classList.toggle('active', hasTopic && tab.dataset.topic === topic);
    });

    topicPanels.forEach((panel) => {
      panel.classList.toggle('active', hasTopic && panel.dataset.topic === topic);
    });

    if (topicDefaultPanel) {
      topicDefaultPanel.classList.toggle('hidden', hasTopic);
    }
  }

  function updateTopicUrl(topic) {
    const url = new URL(window.location.href);

    if (topic) {
      url.searchParams.set('topic', topic);
      url.hash = 'research-interest';
    } else {
      url.searchParams.delete('topic');
      url.hash = 'research-interest';
    }

    history.replaceState(null, '', url.toString());
  }

  if (topicTabs.length && topicPanels.length) {
    const params = new URLSearchParams(window.location.search);
    const initialTopic = params.get('topic');

    activateTopic(initialTopic);

    topicTabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        const topic = tab.dataset.topic;
        const isAlreadyActive = tab.classList.contains('active');

        if (isAlreadyActive) {
          activateTopic(null);
          updateTopicUrl(null);
        } else {
          activateTopic(topic);
          updateTopicUrl(topic);
        }
      });
    });
  }
});
