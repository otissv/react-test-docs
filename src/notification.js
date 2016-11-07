

export default function notification ({ title, body, icon}) {
  // title: string, body: string , icon: string

  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");

  } else if (Notification.permission === "granted") {
    const n = new Notification(title, { body, icon });

    setTimeout(n.close.bind(n), 5000);

  } else if (Notification.permission !== 'denied') {

    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        const n = new Notification(title, { body, icon });

        setTimeout(n.close.bind(n), 5000);
      }
    });
  }
}
