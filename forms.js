document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-formsubmit]');

  forms.forEach((form) => {
    const submitButton = form.querySelector('[type="submit"]');
    const status = form.querySelector('[data-form-status]');
    const originalButtonText = submitButton ? submitButton.textContent.trim() : '';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (form.dataset.submitting === 'true' || !form.reportValidity()) {
        return;
      }

      const action = form.getAttribute('action');
      const ajaxAction = action.includes('/ajax/')
        ? action
        : action.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');

      form.dataset.submitting = 'true';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = form.dataset.loadingMessage || 'Se trimite...';
      }

      if (status) {
        status.textContent = form.dataset.progressMessage || 'Trimit formularul...';
        status.dataset.state = 'loading';
      }

      try {
        const response = await fetch(ajaxAction, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok || data.success === false || data.success === 'false') {
          throw new Error(data.message || 'Request failed');
        }

        form.reset();

        if (status) {
          status.textContent = form.dataset.successMessage || 'Mesaj trimis cu succes.';
          status.dataset.state = 'success';
        }

        if (submitButton) {
          submitButton.textContent = form.dataset.successButton || 'Trimis';
        }
      } catch (error) {
        if (status) {
          status.textContent = form.dataset.errorMessage || 'Nu am reușit să trimit formularul. Încearcă din nou.';
          status.dataset.state = 'error';
        }

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }

        form.dataset.submitting = 'false';
        return;
      }

      window.setTimeout(() => {
        form.dataset.submitting = 'false';

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }, 4500);
    });
  });
});
