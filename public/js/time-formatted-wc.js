class TimeFormatted extends HTMLElement { // (1)

  // Called anytime a new custom element is created
  constructor() {
    // Calls the parent constructor, i.e. the constructor for `HTMLElement`, so that everything is set up exactly as we would for creating a built in HTML element
    super();

    // // Grabs the <template> and stores it in `warning`
    // let warning = document.getElementById("warningtemplate");
    //
    // // Stores the contents of the template in `mywarning`
    // let mywarning = warning.content;
    //
    // const shadowRoot = this.attachShadow({mode: "open"}).appendChild(mywarning.cloneNode(true));
    // // ToDo
    // console.dir(shadowRoot);

    this.load();
  }

  connectedCallback() {
    let date = new Date(this.getAttribute('datetime') || Date.now());

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined,
    }).format(date);
  }

  load() {
    fetch('//ponyboy-curtis-3377.ew.r.appspot.com/')
      .then(function(response) {
        if (response.ok)
          return response.json();
        else
          throw new Error('Daten konnten nicht geladen werden');
      })
      .then(function(json) {
        // Hier Code zum einarbeiten der Kurse in die Anzeige
        console.log(json);
        var node = document.createElement("P");
        var textnode = document.createTextNode(JSON.stringify(json));
        node.appendChild(textnode);
        window.document.body.appendChild(node);
      })
      .catch(function(err) {
        // Hier Fehlerbehandlung
        console.error(err);
      });
  }
}

window.customElements.define("time-formatted", TimeFormatted); // (2)

/* // (3)
<time-formatted datetime="2021-07-13"
  year="numeric" month="long" day="numeric"
  hour="numeric" minute="numeric" second="numeric"
  time-zone-name="short"
></time-formatted>
*/
