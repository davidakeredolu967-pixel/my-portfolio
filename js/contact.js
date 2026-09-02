/**
 * Contact Form Handling & Copy Toast Notification
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyEmail();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all fields before sending.', 'warning');
      return;
    }

    // Prepare mailto link as direct fall-through for static sites
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Niyi,\n\n${message}\n\nFrom: ${name} (${email})`);
    const mailtoUrl = `mailto:akeredoludavid18@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    showToast('✉️ Opening your email client to send message...', 'success');
    form.reset();
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = copyBtn.getAttribute('data-email') || 'akeredoludavid18@gmail.com';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-https / older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      showToast(`✓ Copied ${emailToCopy} to clipboard!`, 'success');
    } catch (err) {
      showToast('⚠️ Could not copy email automatically.', 'warning');
    }
  });
}

/**
 * Custom Toast Notification
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger reflow to animate
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

// Make showToast accessible globally if needed
window.showToast = showToast;
