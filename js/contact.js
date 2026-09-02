/**
 * Contact Form Handling & Copy Toast Notification
 * Configured for Niyi (akeredoludavid967@gmail.com / 09054168609)
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

    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const messageInput = form.querySelector('#contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all required fields.', 'warning');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email address.', 'warning');
      return;
    }

    // Prepare direct mailto link
    const subject = encodeURIComponent(`Project / Development Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Niyi,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailtoUrl = `mailto:akeredoludavid967@gmail.com?subject=${subject}&body=${body}`;

    // Trigger email client
    window.location.href = mailtoUrl;

    showToast('✉️ Opening your email client to send message to Niyi...', 'success');
    form.reset();
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = copyBtn.getAttribute('data-email') || 'akeredoludavid967@gmail.com';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
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
 * Toast Notification System
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
  }, 3800);
}

window.showToast = showToast;
