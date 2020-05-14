class Alert {
  constructor() {
    let alert = document.createElement('div');
    alert.id = 'alert';
    this.alert = alert;
  }

  create(message, style, duration) {
    let p = document.createElement('p');
    p.innerText = message;
    this.alert.classList = style;
    this.alert.appendChild(p);
    document.body.appendChild(this.alert);

    this.alert.addEventListener('click', () => {
      this.alert.style.opacity = '0';
      setTimeout(() => {
        this.alert.remove();
      }, 1500);
    });

    setTimeout(() => {
      this.alert.style.opacity = '0';
      setTimeout(() => {
        this.alert.remove();
      }, 1500);
    }, duration);
  }
}

// Usage
let new_alert = new Alert();

setTimeout(() => {
  // Create Alert
  new_alert.create(
    'How quickly daft jumping zebras vex. Alert Link.',
    'error',
    7000
  );
}, 2500);
