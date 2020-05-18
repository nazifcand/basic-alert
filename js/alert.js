class Alert {
  constructor() {
    let alert = document.createElement('div');
    alert.id = 'alert';
    this.alert = alert;
  }

  create(options) {
    /* Create message & type */
    let p = document.createElement('p');
    p.innerText = options.message;
    this.alert.classList = options.type;
    this.alert.appendChild(p);
    document.body.appendChild(this.alert);

    /* Alert position */
    if (!options.position) {
      options.position = {
        top: '20px',
        right: '20px',
      };
    }
    if (options.position) {
      options.position.top
        ? (this.alert.style.top = options.position.top)
        : null;
      options.position.bottom
        ? (this.alert.style.bottom = options.position.bottom)
        : null;
      options.position.left
        ? (this.alert.style.left = options.position.left)
        : null;
      options.position.right
        ? (this.alert.style.right = options.position.right)
        : null;
    }

    /* Auto remove */
    if (options.duration) {
      setTimeout(() => {
        this.delete();
      }, options.duration);
    }
    /* Click remove */
    this.alert.addEventListener('click', () => {
      if (!options.click) {
        this.delete();
        return false;
      }
      options.click();
    });
  }

  delete() {
    this.alert.style.opacity = '0';
    setTimeout(() => {
      this.alert.remove();
    }, 1500);
  }
}

// Usage
const alert = new Alert();

setTimeout(() => {
  // Create Alert
  alert.create({
    message: 'www.google.com adresine git.',
    type: 'info',
    position: {
      top: '40px',
      left: '50px',
    },
    click: () => {
      window.location.href = 'http://www.google.com';
    },
  });
}, 2500);
