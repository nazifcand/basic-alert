class Alert {
  constructor() {
    let alert = document.createElement('div');
    alert.id = 'alert';
    this.alert = alert;
  }

  create(message, style, duration = null) {
    let p = document.createElement('p');
    p.innerText = message;
    this.alert.classList = style;
    this.alert.appendChild(p);
    document.body.appendChild(this.alert);

    this.alert.addEventListener('click', () => {
      this.delete();
    });

    if (duration != null) {
      setTimeout(() => {
        this.delete();
      }, duration);
    }
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
  alert.create('How quickly daft jumping zebras vex. Alert Link.', 'error');
}, 2500);
